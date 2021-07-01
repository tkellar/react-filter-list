import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ListContextProvider } from './context/list.context'
import FilterListDisplay from './FilterListDisplay'
import * as filters from './helpers/filters'
import Container from 'react-bootstrap/Container'

const FilterList = (props) => {
  const { listData, renderComponent, children } = props
  const SEARCH_PROPERTY_NAME = 'name'
  const TAGS_PROPERTY_NAME = 'tags'

  const [state, setState] = useState({
    // The original set of data provided by the user
    originalListData: listData,

    // Data currently being displayed to the user
    currentListData: new Array(...listData),

    // List of currently selected tags
    selectedTags: new Set(),

    searchBarEntry: '',

    // Filters the data based on a search term
    updateSearchBarEntry: (searchBarEntry) => {
      setState((prevState) => ({
        ...prevState,
        currentListData: prevState.originalListData
          .filter(
            filters.searchTermFilter(SEARCH_PROPERTY_NAME, searchBarEntry)
          )
          .filter(
            filters.tagFilter(TAGS_PROPERTY_NAME, prevState.selectedTags)
          ),
        searchBarEntry: searchBarEntry
      }))
    },

    // Filters the data based on selected tags
    updateSelectedTags: (tagName, selected) => {
      setState((prevState) => {
        const currentTags = new Set(prevState.selectedTags)
        if (selected) {
          currentTags.add(tagName)
        } else {
          currentTags.delete(tagName)
        }

        return {
          ...prevState,
          currentListData: prevState.originalListData
            .filter(
              filters.searchTermFilter(
                SEARCH_PROPERTY_NAME,
                prevState.searchBarEntry
              )
            )
            .filter(filters.tagFilter(TAGS_PROPERTY_NAME, currentTags)),
          selectedTags: currentTags
        }
      })
    }
  })

  return (
    <ListContextProvider value={state}>
      <Container className='FilterList border rounded px-3 pb-3' fluid='lg'>
        {/* Optional header component */}
        {children || null}

        {/* Internal component for displaying list */}
        <FilterListDisplay renderComponent={renderComponent} />
      </Container>
    </ListContextProvider>
  )
}

FilterList.propTypes = {
  renderComponent: PropTypes.func.isRequired,
  listData: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.element
}

FilterList.defaultProps = {
  children: null
}

export default FilterList

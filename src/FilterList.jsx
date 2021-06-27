import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ListContextProvider } from './data.context'
import FilterListDisplay from './FilterListDisplay'
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
        currentListData: prevState.originalListData.filter((datum) =>
          datum[`${SEARCH_PROPERTY_NAME}`].includes(searchBarEntry)
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

        const pred = (datum) => {
          const matchesSearchBar = datum[`${SEARCH_PROPERTY_NAME}`].includes(
            prevState.searchBarEntry
          )
          const matchesTags =
            !currentTags.size || currentTags.has(datum[`${TAGS_PROPERTY_NAME}`])

          return matchesSearchBar && matchesTags
        }

        return {
          ...prevState,
          currentListData: prevState.originalListData.filter(pred),
          selectedTags: currentTags
        }
      })
    }
  })

  return (
    <ListContextProvider value={state}>
      <Container className='FilterList border rounded p-3' fluid='lg'>
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

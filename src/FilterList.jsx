import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  ThemeContextProvider,
  darkTheme,
  lightTheme
} from './context/theme.context'
import { ListContextProvider } from './context/list.context'
import FilterListDisplay from './FilterListDisplay'
import * as filters from './helpers/filters'
import Container from 'react-bootstrap/Container'

const ContainerStyled = styled(Container)`
  background-color: ${({ theme }) => theme.backgroundColor};
  border: ${({ theme }) => `solid ${theme.borderColor} 1px`};
  color: ${({ theme }) => theme.searchBoxText};
`

const FilterList = (props) => {
  const { listData, renderComponent, children } = props
  const SEARCH_PROPERTY_NAME = 'name'
  const TAGS_PROPERTY_NAME = 'tags'
  const selectedTheme = props.dark ? darkTheme : lightTheme

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
      <ThemeContextProvider value={selectedTheme}>
        <ContainerStyled
          theme={selectedTheme}
          className='FilterList rounded'
          fluid='lg'
        >
          {/* Optional header component */}
          {children}

          {/* Internal component for displaying list */}
          <FilterListDisplay renderComponent={renderComponent} />
        </ContainerStyled>
      </ThemeContextProvider>
    </ListContextProvider>
  )
}

FilterList.propTypes = {
  renderComponent: PropTypes.func.isRequired,
  listData: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.element,
  dark: PropTypes.boolean
}

FilterList.defaultProps = {
  children: null,
  dark: false
}

export default FilterList

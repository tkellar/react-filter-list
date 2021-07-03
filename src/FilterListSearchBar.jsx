import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeContext from './context/theme.context'
import ListContext from './context/list.context'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const FormControlStyled = styled(FormControl)`
  background-color: ${({ theme }) => theme.searchBoxBackgroundColor};
  color: ${({ theme }) => theme.searchBoxTextColor};
  border: ${({ theme }) => `solid ${theme.searchBoxBorderColor} 1px`};

  transition: all 0.2s ease-in-out;

  &:focus {
    background-color: ${({ theme }) => theme.searchBoxBackgroundColor};
    color: ${({ theme }) => theme.searchBoxTextColor};
    opacity: 1;
    box-shadow: ${({ theme }) => `${theme.searchBoxBorderColor} 0 0 8px 0px`};
    border-color: ${({ theme }) => theme.searchBoxBorderColor};
  }
`

const FilterListSearchBar = (props) => {
  const { children, theme } = props

  const listContext = useContext(ListContext)
  const themeContext = useContext(ThemeContext)

  const handleSearchBarChange = (event) => {
    const value = event.target.value
    listContext.updateSearchBarEntry(value)
  }

  return (
    <Col className='FilterListSearchBar' xs={12} sm={5} md={3}>
      <InputGroup>
        <FormControlStyled
          placeholder={children ?? 'Search'}
          value={listContext.searchBarValue}
          onChange={handleSearchBarChange}
          theme={{ ...themeContext, ...theme }}
        />
      </InputGroup>
    </Col>
  )
}

FilterListSearchBar.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.shape({
    searchBoxBackgroundColor: PropTypes.string,
    searchBoxTextColor: PropTypes.string,
    searchBoxBorderColor: PropTypes.string
  })
}

FilterListSearchBar.defaultValues = {
  children: 'Search',
  theme: null
}

export default FilterListSearchBar

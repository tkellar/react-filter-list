import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeContext from './context/theme.context'
import ListContext from './context/list.context'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const FormControlStyled = styled(FormControl)`
  background-color: ${({ theme }) => theme.searchBoxBackground};
  color: ${({ theme }) => theme.searchBoxText};
  border: ${({ theme }) => `solid ${theme.searchBoxBorder} 1px`};
`

const FilterListSearchBar = (props) => {
  const { children } = props

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
          placeholder={children || 'Search'}
          value={listContext.searchBarValue}
          onChange={handleSearchBarChange}
          theme={themeContext}
        />
      </InputGroup>
    </Col>
  )
}

FilterListSearchBar.propTypes = {
  children: PropTypes.string
}

FilterListSearchBar.defaultValues = {
  children: 'Search'
}

export default FilterListSearchBar

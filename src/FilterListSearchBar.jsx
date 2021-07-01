import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ListContext from './context/list.context'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const FilterListSearchBar = (props) => {
  const { children } = props

  const listContext = useContext(ListContext)

  const handleSearchBarChange = (event) => {
    const value = event.target.value
    listContext.updateSearchBarEntry(value)
  }

  return (
    <Col className='FilterListSearchBar' xs={12} sm={5} md={3}>
      <InputGroup>
        <FormControl
          placeholder={children || 'Search'}
          value={listContext.searchBarValue}
          onChange={handleSearchBarChange}
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

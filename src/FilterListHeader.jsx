import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'

const FilterListHeader = (props) => {
  const { children } = props

  return (
    <Row className='FilterListHeader align-items-center rounded-top p-3 bg-dark'>
      {children || null}
    </Row>
  )
}

FilterListHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

FilterListHeader.defaultValues = {
  children: null
}

export default FilterListHeader

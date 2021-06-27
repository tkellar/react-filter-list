import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'

const FilterListTagGroup = (props) => {
  const { children } = props
  return (
    <Col className='FilterListTagGroup pt-3 p-sm-0'>{children || null}</Col>
  )
}

FilterListTagGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

FilterListTagGroup.default = {
  children: null
}

export default FilterListTagGroup

import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'

const FilterListTagGroup = (props) => {
  const { children, theme } = props
  return (
    <Col className='FilterListTagGroup pt-3 p-sm-0'>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            parentTheme: theme
          })
        }

        return child
      })}
    </Col>
  )
}

FilterListTagGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  theme: PropTypes.shape({
    tagBorderColor: PropTypes.string,
    tagTextColor: PropTypes.string,
    tagTextColorActive: PropTypes.string,
    tagBackgroundColor: PropTypes.string,
    tagBackgroundColorActive: PropTypes.string
  })
}

FilterListTagGroup.default = {
  children: null,
  theme: null
}

export default FilterListTagGroup

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ListContext from './data.context'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FilterListDisplay = (props) => {
  const { renderComponent } = props
  const listContext = useContext(ListContext)
  const { currentListData } = listContext

  let i = 0
  const emptyComponent = (
    <Col className='mt-3 mx-auto text-center'>No Results</Col>
  )
  const components = currentListData.map((datum) => (
    <Col className='FilterListItem m-1' key={i++}>
      {renderComponent(datum)}
    </Col>
  ))

  return (
    <Row
      className='FilterListDisplay justify-content-center py-2'
      xs={1}
      sm={2}
      md={3}
      lg={4}
    >
      {components.length ? components : emptyComponent}
    </Row>
  )
}

FilterListDisplay.propTypes = {
  renderComponent: PropTypes.func.isRequired
}

export default FilterListDisplay

import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import ListContext from './data.context'

const FilterListTag = (props) => {
  const { displayName, value } = props

  const listContext = useContext(ListContext)
  const [state, setState] = useState({
    selected: false
  })

  const toggleFilterTag = () => {
    const { selected } = state
    listContext.updateSelectedTags(value || displayName, !selected)

    setState((prevState) => ({
      ...prevState,
      selected: !prevState.selected
    }))
  }

  const tagStyle = {
    padding: '0.25em 0.75em',
    border: 'solid darkgrey 1px',
    borderRadius: '1rem',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    backgroundColor: state.selected ? 'grey' : 'transparent',
    color: state.selected ? 'white' : 'black',
    fontSize: '80%'
  }

  return (
    <span
      className='FilterListTag m-1'
      style={tagStyle}
      onClick={toggleFilterTag}
    >
      {displayName}
    </span>
  )
}

FilterListTag.propTypes = {
  displayName: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default FilterListTag

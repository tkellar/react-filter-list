import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ListContext from './context/list.context'

const Span = styled.span`
  padding: 0.25em 0.75em;
  border: solid darkgrey 1px;
  border-radius: 1rem;
  text-align: center;
  white-space: nowrap;
  background-color: ${(props) => (props.selected ? 'grey' : 'transparent')};
  color: ${(props) => (props.selected ? 'white' : 'darkgrey')};
  font-size: 80%;
  user-select: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`

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

  return (
    <Span className='m-1' onClick={toggleFilterTag} selected={state.selected}>
      {displayName}
    </Span>
  )
}

FilterListTag.propTypes = {
  displayName: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default FilterListTag

import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ListContext from './context/list.context'
import ThemeContext from './context/theme.context'

const Span = styled.span`
  --padding-y: 0.25em;
  --padding-x: 0.75em;
  --padding-growth-factor: 1.3;

  border: solid darkgrey 1px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.tagBackgroundColorActive : theme.tagBackgroundColor};
  color: ${({ theme, selected }) =>
    selected ? theme.tagTextColorActive : theme.tagTextColor};

  padding: var(--padding-y) var(--padding-x);
  font-weight: ${({ selected }) => (selected ? 'bold' : 'initial')};
  border-radius: 1rem;
  text-align: center;
  white-space: nowrap;
  font-size: 80%;
  user-select: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    padding: calc(var(--padding-y) * var(--padding-growth-factor))
      calc(var(--padding-x) * var(--padding-growth-factor));
  }
`

const FilterListTag = (props) => {
  const { displayName, value, parentTheme, theme } = props

  const listContext = useContext(ListContext)
  const themeContext = useContext(ThemeContext)
  const [state, setState] = useState({
    selected: false
  })

  const toggleFilterTag = () => {
    const { selected } = state
    listContext.updateSelectedTags(value ?? displayName, !selected)

    setState((prevState) => ({
      ...prevState,
      selected: !prevState.selected
    }))
  }

  return (
    <Span
      className='m-1'
      onClick={toggleFilterTag}
      theme={{ ...themeContext, ...parentTheme, ...theme }}
      selected={state.selected}
    >
      {displayName}
    </Span>
  )
}

FilterListTag.propTypes = {
  displayName: PropTypes.string.isRequired,
  value: PropTypes.string,
  theme: PropTypes.shape({
    tagBorderColor: PropTypes.string,
    tagTextColor: PropTypes.string,
    tagTextColorActive: PropTypes.string,
    tagBackgroundColor: PropTypes.string,
    tagBackgroundColorActive: PropTypes.string
  })
}

FilterListTag.defaultValues = {
  value: null,
  theme: null
}

export default FilterListTag

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeContext from './context/theme.context'
import Row from 'react-bootstrap/Row'

const RowStyled = styled(Row)`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  border-bottom: ${({ theme }) => `solid ${theme.headerBorderColor} 1px`};
`

const FilterListHeader = (props) => {
  const { children, theme } = props
  const themeContext = useContext(ThemeContext)

  return (
    <RowStyled
      theme={{ ...themeContext, ...theme }}
      className='FilterListHeader align-items-center rounded-top p-3'
    >
      {children}
    </RowStyled>
  )
}

FilterListHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  theme: PropTypes.shape({
    headerBackgroundColor: PropTypes.string,
    headerBorderColor: PropTypes.string
  })
}

FilterListHeader.defaultValues = {
  children: null,
  theme: null
}

export default FilterListHeader

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeContext from './context/theme.context'
import Row from 'react-bootstrap/Row'

const RowStyled = styled(Row)`
  border-bottom: ${({ theme }) => `solid ${theme.borderColor} 1px`};
`

const FilterListHeader = (props) => {
  const { children } = props
  const themeContext = useContext(ThemeContext)

  return (
    <RowStyled
      theme={themeContext}
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
  ])
}

FilterListHeader.defaultValues = {
  children: null
}

export default FilterListHeader

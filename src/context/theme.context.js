import React from 'react'

const light = '#f8f9fa'
const white = '#fff'
const grey = '#6c757d'
const pattensBlue = '#dee2e6'
const pattensBlueDark = '#b2b5b8'
const dark = '#343a40'
const dark2 = '#464e56'

export const lightTheme = {
  backgroundColor: light,
  borderColor: pattensBlue,
  headerBackgroundColor: 'initial',
  headerBorderColor: pattensBlue,
  searchBoxBackgroundColor: white,
  searchBoxTextColor: dark,
  searchBoxBorderColor: pattensBlueDark,
  tagBorderColor: pattensBlueDark,
  tagTextColor: grey,
  tagTextColorActive: light,
  tagBackgroundColor: white,
  tagBackgroundColorActive: grey
}

export const darkTheme = {
  backgroundColor: dark,
  borderColor: dark2,
  headerBackgroundColor: 'initial',
  headerBorderColor: dark2,
  searchBoxBackgroundColor: dark2,
  searchBoxTextColor: pattensBlue,
  searchBoxBorderColor: grey,
  tagBorderColor: pattensBlueDark,
  tagTextColor: pattensBlueDark,
  tagTextColorActive: dark,
  tagBackgroundColor: dark2,
  tagBackgroundColorActive: pattensBlue
}

const ThemeContext = React.createContext(lightTheme)

export const ThemeContextProvider = ThemeContext.Provider
export default ThemeContext

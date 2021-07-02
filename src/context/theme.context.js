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
  searchBoxBackground: white,
  searchBoxText: dark,
  searchBoxBorder: pattensBlueDark,
  tagBorder: pattensBlueDark,
  tagText: grey,
  tagTextActive: light,
  tagBackground: white,
  tagBackgroundActive: grey
}

export const darkTheme = {
  backgroundColor: dark,
  borderColor: dark2,
  searchBoxBackground: dark2,
  searchBoxText: pattensBlue,
  searchBoxBorder: grey,
  tagBorder: pattensBlueDark,
  tagText: pattensBlueDark,
  tagTextActive: dark,
  tagBackground: dark2,
  tagBackgroundActive: pattensBlue
}

const ThemeContext = React.createContext(lightTheme)

export const ThemeContextProvider = ThemeContext.Provider
export default ThemeContext

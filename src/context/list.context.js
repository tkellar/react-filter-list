import React from 'react'

const ListContext = React.createContext({
  originalListData: [],
  currentListData: [],
  selectedTags: new Set(),
  searchBarEntry: '',

  // eslint-disable-next-line prettier/prettier
  updateSearchBarEntry: () => { },

  // eslint-disable-next-line prettier/prettier
  updateSelectedTags: () => { }
})

export const ListContextProvider = ListContext.Provider
export default ListContext

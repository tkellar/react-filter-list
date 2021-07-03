import React from 'react'
import './index.css'

import {
  FilterList,
  FilterListSearchBar,
  FilterListTagGroup,
  FilterListTag,
  FilterListHeader
} from 'react-filter-list'

const heroData = [
  { heroName: 'Superman', superpowers: ['Flying', 'Strength', 'Speed'] },
  { heroName: 'Spiderman', superpowers: ['Climbing', 'Strength'] },
  { heroName: 'Aquaman', superpowers: ['Swimming'] },
  { heroName: 'Batman', superpowers: ['Intelligence', 'Alfred'] },
  { heroName: 'The Flash', superpowers: ['Speed', 'Intelligence'] }
]

const App = () => {
  // The render function is used to generate each list item
  // based on the data passed to the FilterList component's
  // 'listData' prop
  const renderFunc = ({ heroName, superpowers }) => (
    <div className='border border-secondary rounded bg-light'>
      <div className='rounded-top bg-primary text-center p-2'>
        <h1>{heroName}</h1>
      </div>
      <div className='p-3'>
        <strong>Powers:</strong>
        <ul className='m-0'>
          {superpowers.map((power) => (
            <li>{power}</li>
          ))}
        </ul>
      </div>
    </div>
  )

  // By default the search and tag functionality
  // will look at the 'key' and 'tags' properties
  // of your data for keyword and tag filtering.
  // However, these property names can be overridden
  // with the 'propertyMap' prop (as shown below)
  const mapping = {
    keywordSearchProperty: 'heroName',
    tagsListProperty: 'superpowers'
  }

  return (
    <div className='App p-5'>
      <h1>Superheros</h1>

      <FilterList
        theme='dark'
        propertyMap={mapping}
        renderComponent={renderFunc}
        listData={heroData}
      >
        <FilterListHeader>
          <FilterListSearchBar>What are you looking for?</FilterListSearchBar>
          <FilterListTagGroup>
            <FilterListTag displayName='Flying' />
            <FilterListTag displayName='Strength' />
            <FilterListTag displayName='Climbing' />
            <FilterListTag displayName='Swimming' />
            <FilterListTag displayName='Speed' />
          </FilterListTagGroup>
        </FilterListHeader>
      </FilterList>
    </div>
  )
}

export default App

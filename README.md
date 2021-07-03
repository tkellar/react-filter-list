# react-filter-list

[![NPM](https://img.shields.io/npm/v/react-filter-list.svg)](https://www.npmjs.com/package/@tkellar/react-filter-list) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install --save @tkellar/react-filter-list
```

## Usage

Check out a live demo of this code [here](https://tkellar.github.io/react-filter-list/)

```jsx
import React from 'react'

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
```

## API

### FilterList

| Prop Name       | Type                                                                      | Default Value | Required |
| --------------- | ------------------------------------------------------------------------- | ------------- | -------- |
| theme           | string \| <br>{<br> backgroundColor: string,<br> borderColor: string<br>} | 'light'       | no       |
| propertyMap     | {<br>keywordSearchProperty: string,<br>tagsListProperty: string<br>}      | null          | no       |
| children        | FilterListHeader                                                          | null          | no       |
| renderComponent | ( ) => React.Element                                                      | -             | yes      |
| listData        | Array                                                                     | -             | yes      |

### FilterListHeader

| Prop Name | Type                                                                                        | Default Value | Required |
| --------- | ------------------------------------------------------------------------------------------- | ------------- | -------- |
| theme     | {<br> headerBackgroundColor: string,<br> headerBorderColor: string<br>}                     | null          | no       |
| children  | FilterListSearchBar \|<br>FilterListTagGroup \|<br>FilterListSearchBar & FilterListTagGroup | null          | no       |

### FilterListSearchBar

| Prop Name | Type                                                                                                       | Default Value | Required |
| --------- | ---------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| theme     | {<br>searchBoxBackgroundColor: string,<br>searchBoxBorderColor: string,<br>searchBoxTextColor: string<br>} | null          | no       |
| children  | string                                                                                                     | 'Search'      | no       |

### FilterListTagGroup

| Prop Name | Type                                                                                                                                                         | Default Value | Required |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | -------- |
| theme     | {<br>tagBorderColor: string,<br>tagTextColor: string,<br>tagTextColorActive: string,<br>tagBackgroundColor: string,<br>tagBackgroundColorActive: string<br>} | null          | no       |
| children  | Array\<FilterListTag\>                                                                                                                                       | null          | no       |

### FilterListTag

| Prop Name   | Type                                                                                                                                                         | Default Value | Required |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | -------- |
| theme       | {<br>tagBorderColor: string,<br>tagTextColor: string,<br>tagTextColorActive: string,<br>tagBackgroundColor: string,<br>tagBackgroundColorActive: string<br>} | null          | no       |
| displayName | string                                                                                                                                                       | -             | yes      |
| value       | string                                                                                                                                                       | null          | no       |

## License

MIT © [tkellar](https://github.com/tkellar)

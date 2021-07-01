import React from 'react'

import {
  FilterList,
  FilterListSearchBar,
  FilterListTagGroup,
  FilterListTag,
  FilterListHeader
} from 'react-filter-list'

const App = () => {
  const renderFunc = ({name, price, weight}) => (
    <div className='border rounded'>
      <div className='text-center bg-primary rounded-top p-3'>
        <h1>{name}</h1>
      </div>
      <div className='pt-3'>
        <ul>
          <li>
            <strong>Price:</strong>
            {' ' + price}
          </li>
          <li>
            <strong>Weight:</strong>
            {' ' + weight}
          </li>
        </ul>
      </div>
    </div>
  )

  const data = [
    { name: 'apple', price: '$1.99', weight: '1.2lb', tags: 'red yellow green' },
    { name: 'banana', price: '$0.85', weight: '0.85lb', tags: 'yellow' },
    { name: 'carrot', price: '$0.92', weight: '1.56lb', tags: 'orange' },
    { name: 'squash', price: '$2.21', weight: '0.86lb', tags: 'yellow' }
  ]

  return (
    <FilterList renderComponent={renderFunc} listData={data}>
      <FilterListHeader>
        <FilterListSearchBar>What are you looking for?</FilterListSearchBar>
        <FilterListTagGroup>
          <FilterListTag displayName='Red' value='red' />
          <FilterListTag displayName='Yellow' value='yellow' />
          <FilterListTag displayName='Green' value='green' />
          <FilterListTag displayName='Orange' value='orange' />
        </FilterListTagGroup>
      </FilterListHeader>
    </FilterList>
  )
}

export default App

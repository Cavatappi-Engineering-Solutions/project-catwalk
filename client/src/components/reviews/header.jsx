import React from 'react'

const Header = ({ total, sort, handleSort }) => (
  <div id="reviews-header">
    <label id="reviews-header-label" htmlFor="reviews-header-sort">{`${total} total reviews, sorted by `}</label>
    <select id="reviews-header-sort" onClick={(e) => handleSort(e.target.value)}>
      <option value="relevant">relevance</option>
      <option value="helpful">helpfulness</option>
      <option value="newest">most recent</option>
    </select>
  </div>
)

export default Header

import React from 'react';

const CategorySelector = (props) => {
  // return null;
  if(!props.categories.length) return null;
  const options = props.categories.map((category, index) => {
   return <option value={index} key={index}>{category}</option>

  });
  const handleChange = (event) => {
    let index = event.target.value;
    props.onCategorySelected(index)
  }

  return (
    <select
      onChange={handleChange}
      id="category-selector"
      defaultValue="default">
      <option disabled value="default">Choose a category...</option>
      {options}
    </select>
  )
}

export default CategorySelector;

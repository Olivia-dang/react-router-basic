import React from "react";
import {Link} from 'react-router-dom'

const CategorySelection = ({ categories }) => {
  return (
    <div>
      <h1> Category Selection </h1>
      {categories.map((item, index) => {
        return <li key={index}><Link to={`/entry/new/${index}`}>{item}</Link></li>
      })}
    </div>
  )
};
export default CategorySelection;
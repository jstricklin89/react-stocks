import React, { Fragment } from 'react';

const SearchBar = ({ handleInput, handleRadio, selectedRadio, handleSelect }) => {
  return (
    <Fragment>
      <strong>Search for Stocks!</strong>
      <input type="text" onChange={(event) => handleInput(event.target.value)}/>
      <br/>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name="" checked={selectedRadio === "Alphabetically"} onChange={(event) => handleRadio(event)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={selectedRadio === "Price"} onChange={(event) => handleRadio(event)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => handleSelect(event.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </Fragment>
  );
}


export default SearchBar;

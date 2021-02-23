import React from 'react';
import './Search.css'

const Search=({onInputChange})=>{
     return (
         <div className="search-component">
             <input type="text" 
             onChange={(event)=>onInputChange(event.target.value) } 
             placeholder="Type Keyword here" 
             className="search-input"></input>
         </div>
     )
}


export default Search;
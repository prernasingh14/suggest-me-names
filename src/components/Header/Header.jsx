import React from 'react';
import image from './../../assets/undraw_Web_search_re_efla.png';
import './Header.css';



const Header=({headerTitle,headerExpanded})=>{
    console.log({headerTitle})
    return (
        <div className="header-component">
            <img src={image} 
            alt="header-image"
             className={`header-image ${headerExpanded?`header-image-expanded`:`header-image-contracted`}`}/>
           <h4 className="header-text">
             {headerTitle}
             </h4>
        </div>
       
    )
}

export default Header;
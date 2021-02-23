import React from 'react';
import './Namecard.css';

const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain=';




const Namecard=({suggestedName})=>{
return (
    <a href={`${nameCheapUrl}${suggestedName}`} className="name-link">
    <div className="name-card-container">
       <p className="result-name-card">{suggestedName}</p>
    </div>
    </a>
)
}


export default Namecard ;

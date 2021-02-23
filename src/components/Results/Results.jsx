import React from 'react';
import './Results.css';
import NameCard from './../Namecard/Namecard'


const Results=({namesList})=>{
    const suggestNameJsx = namesList.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />});
return (
    <div className="result-container">
        {suggestNameJsx}
    </div>
)
}


export default Results ;

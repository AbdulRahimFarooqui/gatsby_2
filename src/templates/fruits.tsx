import React from 'react';

export default function Fruits({pageContext}){
    return(
        <div>
            <h1>{pageContext.name}</h1>
            <h3>Description:</h3>
            <h4>{pageContext.desc}</h4>
        </div>
    )
}
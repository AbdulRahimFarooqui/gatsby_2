import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Products({pageContext}){
    const {item} = pageContext;
    console.log('From product.tsx, obj:',item)
    return(
        <div>
            <h1>{item.name}</h1>
            {documentToReactComponents(item.detailsForElectronics.json)}
        </div>
    )
}
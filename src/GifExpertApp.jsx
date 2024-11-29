import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory ) ) return;
        //categories.push(newCategory);S
        setCategories([ newCategory, ...categories ]);

    }

        return(
            <>
                {/* titulo */}
                <h1>GifExpertApp</h1>

                {/* Input */}
                <AddCategory 
                onNewCategory={ (event) => onAddCategory(event) }
                //setCategories={ setCategories } 
                />

                {/* Listado de Gif */}
                
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category } 
                            category={ category } />
                            
                    ))
                }
                
                    {/* Gif Item */}
            </>
        )
}
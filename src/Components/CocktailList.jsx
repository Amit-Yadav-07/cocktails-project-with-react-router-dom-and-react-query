import React from 'react'
import CocktailCard from './CocktailCard';

function CocktailList({ drinks }) {

    if (!drinks) {
        return <div className='Error'>
            <h3>No Matching Cocktails found...</h3>
        </div>
    }


    return (
        <div className='drinks-container'>
            {drinks.map((drink) => {
                return <CocktailCard drink={drink} key={drink.idDrink} />
            })}
        </div>
    )
}

export default CocktailList
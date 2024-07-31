import React from 'react'
import { Link } from 'react-router-dom';

function CocktailCard({ drink }) {
    const { idDrink, strDrinkThumb, strDrink, strGlass, strAlcoholic } = drink;


    return (
        <div className='card'>
            <div className="drink-img">
                <img src={strDrinkThumb} alt={strDrink} loading='lazy' />
            </div>
            <div className='drink-disc-container'>
                <h5 className='drink-title'>{strDrink}</h5>
                <em>{strGlass}</em>
                <p>{strAlcoholic}</p>
                <Link to={`/cocktail/${idDrink}`} className='drink-btn'>Details</Link>
            </div>
        </div>
    )
}

export default CocktailCard
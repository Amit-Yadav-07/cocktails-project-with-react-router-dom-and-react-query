import { useLoaderData, Link } from "react-router-dom"
import axios from "axios"

const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


export const loader = async ({ params }) => {

  const { id } = params;

  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, data }

};

function Cocktail() {

  const { data, id } = useLoaderData();

  // console.log(data);
  const { idDrink,
    strCategory,
    strGlass,
    strInstructions,
    strDrinkThumb,
    strAlcoholic,
    strDrink,
    strIngredient1 } = data?.drinks[0];


  const validStrIngredient = Object.keys(data.drinks[0]).filter((item) => {
    console.log();
    return item.startsWith('strIngredient') && data.drinks[0][item]


  }).map((key) => {
    return data.drinks[0][key]
  })


  return (
    <div className="single-drink-container">
      <Link to={'/'} className="drink-btn">Back Home</Link>
      <h4>{strDrink}</h4>
      <div className="single-drink-center">
        <div className="single-drink-img">
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <div className="single-drink-title">
          <div className="single-btn"><button>name : </button><h3>{strDrink}</h3></div>
          <div className="single-btn"><button>Category : </button><h3>{strCategory}</h3></div>
          <div className="single-btn"><button>info : </button><h3>{strAlcoholic}</h3></div>
          <div className="single-btn"><button>glass : </button><h3>{strGlass}</h3></div>
          <div className="single-btn"><button>Ingredients : </button>{validStrIngredient.map((value, index) => {
            return <h3 key={value}>{value}{index < validStrIngredient.length - 1 ? ',' : ''}</h3>
          })}</div>
          <div className="single-btn"><button>Instructions: </button><h3>{strInstructions}</h3></div>

        </div>
      </div>
    </div>
  )
}

export default Cocktail
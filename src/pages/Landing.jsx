import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../Components/CocktailList";
import SearchForm from "../Components/SearchForm";
const searchCocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

export const loader = async ({ request }) => {

    const url = new URL(request.url);
    const drink = url.searchParams.get('search') || "";

    const response = await axios.get(`${searchCocktailUrl}${drink}`);
    return { drinks: response.data.drinks, drink };
}

function Landing() {
    const { drinks, drink } = useLoaderData();
    ;
    return (
        <>
            <SearchForm drink={drink} />
            <CocktailList drinks={drinks} />
        </>
    )
}

export default Landing
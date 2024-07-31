import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, Landing, Error, NewsLetter, HomeLayout, Cocktail, SingleErrorPage } from "./pages";
import { loader as LoaderLoading } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/NewsLetter";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'cocktail/:id',
        errorElement: <SingleErrorPage />,
        loader: singleCocktailLoader,
        element: <Cocktail />
      },
      {
        index: true,
        element: <Landing />,
        errorElement: <SingleErrorPage />,
        loader: LoaderLoading
      },
      {
        path: 'newsletter',
        action: newsLetterAction,
        element: <NewsLetter />,
      }
    ]
  }




])


function App() {


  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App

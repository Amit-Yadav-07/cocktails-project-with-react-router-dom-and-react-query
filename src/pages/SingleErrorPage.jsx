import { useRouteError } from "react-router-dom";

const SingleErrorPage = () => {
    const singleError = useRouteError();
    return <div className="Error">
        <h3>Something went wrong...</h3>
    </div>
}

export default SingleErrorPage;
import {  useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError()

    // if(isRouteErrorResponse(error)){
    return (
        <div >
            <h1>{error.status}</h1>
            <h2>{error.statusText || 'Something goes wrong!'}</h2>
            {/* <h3>{error.data.reason}</h3> */}
        </div>
    )
    // }
    // return (<div>{error.status}</div>)
    // throw error

}
export default ErrorPage
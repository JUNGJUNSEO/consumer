import Link from "next/link"

function ErrorPage(){



    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for could not be found.</p>
            <Link href="/">
                Go back to the homepage
            </Link>
      </div>
    )
}


export default ErrorPage
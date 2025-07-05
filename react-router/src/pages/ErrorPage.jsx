import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {

    const error = useRouteError()

    if (error.status === 404) {
        return (
            <section className="error-section">
                <div className="error-text">
                    <figure>
                        <img
                            src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                            alt="404 page not found"
                            className="error-img"
                        />
                    </figure>
                    <div className="text-center">
                        <p className="p-a">
                            The page you are looking does not exist
                        </p>
                        <p className="p-b">
                            ... Back to previous page
                        </p>
                    </div>
                    <NavLink to="/" className="btn">
                        Go to Home page 
                    </NavLink>
                </div>
            </section>

        )

    }


}
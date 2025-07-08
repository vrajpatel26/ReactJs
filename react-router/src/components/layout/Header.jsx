import { NavLink } from "react-router-dom";

export const Header = () => {

    const getNavLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? "pink" : "black",
        };
    }


    return <header className="section-navbar">
        <section className="top_txt">
            <div className="head container">
                <div className="head_txt">
                    <p>Get MovieFlix Membership, 30-day return or refund guarantee.</p>
                </div>
                <div className="sing_in_up">
                    <NavLink to="# ">SIGN IN</NavLink>
                    <NavLink to="# ">SIGN UP</NavLink>
                </div>
            </div>
        </section>


        <div className="container">
            <div className="navbar-brand">
                <NavLink to="index">
                    <p>MovieFlix</p>
                </NavLink>
            </div>

            <nav className="navbar">
                <ul>
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            //best way for active
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/about"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "red" : "black",
                                };
                            }}
                        >
                            about
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="movie"
                            className="nav-link"
                            style={getNavLinkStyle}
                        >
                            movies
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="contact"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}
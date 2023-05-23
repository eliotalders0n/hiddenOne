import { Outlet, Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import 'animate.css';
import './../App.css';

const Layout = () => {
    return (
        <div className="hero is-large">
            <div className="hero-head is-large">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <h1 className="navbar-item animate__animated animate__pulse animate__repeat-2">
                                <Link to="/"><b>Hidd3nOne</b></Link>
                            </h1>
                            <span className="navbar-burger" data-target="navbarMenuHeroA">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end" id='nav-items'>
                                <p className="navbar-item">
                                    <Link to="/Details">Jump-In</Link>
                                </p>
                                <p className="navbar-item">
                                    <Link to="/Profile">Core</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div>
        </div>
    );
}


export default Layout;
import { Link } from "react-router";
import logo from '../assets/react.svg';

export function Header() {
    return (
            <header className="header">
                <img className="logo" src={logo} alt="Logo" />
                <nav className="main-nav">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/services">Services</Link>
                    <Link className="link" to="/login">Login</Link>
                    <Link className="link" to="/register">Register</Link>
                </nav>
            </header>
    );
};
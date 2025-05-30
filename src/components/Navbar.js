import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ darkMode, setDarkMode }) {

    return (
        <nav className="navbar">
            <div className="navbar-logo">DUT Test Chatbot</div>
            <ul className="navbar-menu">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/chatbot" className={({ isActive }) => isActive ? "active-link" : ""} end>
                        Chatbot
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/demo" className={({ isActive }) => isActive ? "active-link" : ""} end>
                        Demo
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
                        About
                    </NavLink>
                </li>
                <li>
                    <div className="emoji-toggle">
                        <input
                            type="checkbox"
                            id="toggle-theme"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        <label htmlFor="toggle-theme" className="toggle-label">
                            <div className="slider-icon">
                                <span className="sun">☀️</span>
                                <span className="moon">🌙</span>
                            </div>
                        </label>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

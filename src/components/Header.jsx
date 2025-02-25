//import "../assets/styles/components/Header.css"
import { useCollapse } from "../hooks/useCollapse";
import { Link } from "react-router-dom";

function Header() {
    const { elementRef, toggleCollapse } = useCollapse();
    return (
        <header>
            <nav className="navbar">
                <Link className="navbar-logo" to="/">XSG;</Link>
                <div className="collapsable collapsed" ref={elementRef}>
                    <ul className="navbar-list">
                        <li><Link to="/demo-projects">Demo projects</Link></li>
                        <li><Link to="/public-notes">Public notes</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                    </ul>
                </div>
                <button className="navbar-btn btn-icon-lg bs-icons" data-icon="&#xF479;"
                    onClick={toggleCollapse}></button>
            </nav>

        </header>
    );
}

export default Header;
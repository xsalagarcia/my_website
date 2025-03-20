//import "../assets/styles/components/Header.css"
import { useCollapse } from "../hooks/useCollapse";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LangSelector from "./LangSelector";


function Header() {
    const { elementRef, toggleCollapse } = useCollapse();
    const { t } = useTranslation();
  

    return (
        <header>
            <nav className="navbar wrapper">
                <NavLink className="navbar-logo" to="/"><img src="/inv-logo.svg" style={{width: "64px", height: "64px"}} alt="" />
                </NavLink>
                <div className="collapsable collapsed" ref={elementRef}>
                    <ul className="navbar-list">
                        <li><NavLink to="/demo-projects">{t("Demo_projects")}</NavLink></li>
                        <li><NavLink to="/public-notes">{t("Public_notes")}</NavLink></li>
                        <li><NavLink to="/skills">{t("Skills")}</NavLink></li>
                    </ul>
                    <LangSelector />
                </div>
                <button className="navbar-btn btn-icon-lg bs-icons" data-icon="&#xF479;"
                    onClick={toggleCollapse}></button>
            </nav>

        </header>
    );
}

export default Header;
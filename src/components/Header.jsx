import { useState } from "react";
import { useCollapse } from "../hooks/useCollapse";
import { NavLink } from "react-router";
import { useTranslation } from 'react-i18next';
import LangSelector from "./LangSelector";


function Header() {
    const { elementRef, toggleCollapse } = useCollapse();
    const { t } = useTranslation();

    const [uncollapsed, setUncollapsed] = useState(false);
    

    return (

        <header>
            {uncollapsed && <div 
                style={{
                    position: "fixed",
                    top: "0",
                    right: "0",
                    width: "100vw",
                    height: "100vh",
                }}
                onClick={()=>{setUncollapsed(false);toggleCollapse()}}
                className="uncollapsed-background"
            ></div>}
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
                    onClick={()=>{setUncollapsed(true);toggleCollapse()}}></button>

            </nav>

        </header>
    );
}

export default Header;
import { useState } from "react";
import { useCollapse } from "../../hooks/useCollapse";
import { NavLink } from "react-router";
import { useTranslation } from 'react-i18next';
import LangSelector from "../LangSelector/LangSelector";
import styles from "./Header.module.css";


function Header() {
    const { elementRef, toggleCollapse } = useCollapse();
    const { t } = useTranslation();

    const [uncollapsed, setUncollapsed] = useState(false);
    
    const collapse = ()=>{if (uncollapsed) {setUncollapsed(false);toggleCollapse()}};
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
                onClick={collapse}
                //onTouchStart={(e)=>{e.stopPropagation();setUncollapsed(false);toggleCollapse(); console.log("ccc", e.target)}}
                className={styles.uncollapsedBackground}
            ></div>}
            <nav className={`${styles.navbar} wrapper`}>
                <NavLink className={styles.navbarLogo} to="/" onClick={collapse}><img src="/inv-logo.svg" style={{width: "64px", height: "64px"}} alt="" />
                </NavLink>
                <div className={`${styles.collapsable} collapsed`} ref={elementRef}>
                    <ul className={styles.navbarList}>
                        <li><NavLink onClick={collapse} to="/demo-projects">{t("Demo_projects")}</NavLink></li>
                        <li><NavLink onClick={collapse} to="/public-notes">{t("Public_notes")}</NavLink></li>
                        <li><NavLink onClick={collapse} to="/skills">{t("Skills")}</NavLink></li>
                    </ul>
                    <LangSelector changeCallback={collapse}/>
                </div>
                <button className={`${styles.navbarBtn} btn btn-lg bs-icons-lg soft-colors`} data-icon="&#xF479;"
                    onClick={()=>{setUncollapsed(true);toggleCollapse(); }}></button>

            </nav>

        </header>
    );
}

export default Header;
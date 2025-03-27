import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import styles from "./Footer.module.css";

function Footer () {
    const { t } = useTranslation();

    function handleEmailButtonClick(){
        window.location.href = "mailto:xsalagarcia@gmail.com";
    }

    return (
        <footer>
            <div className="m-auto width-fit p-0-5">
                <a className="bs-icons m-0-5" data-icon="&#xF3ED;" href="https://github.com/xsalagarcia"
                style={{fontSize:"2rem", color: "white"}}></a>
                <a className="bs-icons m-0-5" data-icon="&#xF7F7;" href="https://github.com/xsalagarcia"
                style={{fontSize:"2rem", color: "white"}}></a>
                <a className="bs-icons m-0-5" data-icon="&#xF472;" href="https://github.com/xsalagarcia"
                style={{fontSize:"2rem", color: "white"}}></a>
            </div>
            <div className="text-align-center">
                <a href="" className='link invert-colors m-r-0-5'>&#169; {t("license_on_github_repo")}</a>
                <Link className='link invert-colors' to="/legal">{t("legal_notes")}</Link>
            </div>
            <button className="btn btn-mb bs-icons invert-colors center-block m-t-0-5 m-b-0-5" data-icon="&#xF84B;" onClick={handleEmailButtonClick}> {t("email_me")}</button>

        </footer>
    )
}

export default Footer;
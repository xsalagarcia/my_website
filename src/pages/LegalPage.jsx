import { useTranslation } from 'react-i18next';
import email from "../assets/images/email.svg";

function LegalPage() {
    const {t} = useTranslation("privacy");

    return (
        <>
            <h2>{t("legal_notice")}</h2>
            <ul>
                <li>{t("holder")}: Xavier Sala Garcia</li>
                <li className='row align-items-center'>{t("contact")}: <img src={email} className="margin-left-0-5" alt="xsalagarcia@gmail.com"/></li>
            </ul>
            <p style={{textAlign: "justify"}}>{t("legal_text")}</p>
            
            <h2>{t("cookies_policy")}</h2>
            <p style={{textAlign: "justify"}}>{t("cookies_text")}</p>

            <h2>{t("privacy_policy")}</h2>
            <p style={{textAlign: "justify"}}>{t("privacy_text")}</p>
        </>
    )
}

export default LegalPage;

import { useTranslation } from 'react-i18next';
import myself from "../../assets/images/myself_250.webp"



function Root() {
    const { t } = useTranslation();
    return (
        <>
            <h1 className='text-align-center'>{t("Welcome")}</h1>
            <img 
                className="center-block"
                src={myself} alt="Self portrait"
                style={{borderRadius: "50%", maxWidth: "100%"}}
            />
            <ul className="center-block" style={{width:"fit-content"}}>
                <li className="scale-on-focus-1150 text-align-center m-0-5 bold" style={{width:"100%", color: "var(--color-4)"}}>{t("Computer_engineer")}</li>
                <li className="scale-on-focus-1150 text-align-center m-0-5" style={{width:"100%", color: "var(--color-4)"}}>{t("Software_engineering")}</li>
                <li className="scale-on-focus-1150 text-align-center m-0-5" style={{width:"100%", color: "var(--color-4)"}}>{t("Front_end_developer")}</li>
                <li className="scale-on-focus-1150 text-align-center m-0-5" style={{width:"100%", color: "var(--color-4)"}}>{t("Back_end_developer")}</li>
                <li className="scale-on-focus-1150 text-align-center m-0-5" style={{width:"100%", color: "var(--color-4)"}}>{t("Mobile_developer")}</li>
                <li className="scale-on-focus-1150 text-align-center m-0-5" style={{width:"100%", color: "var(--color-4)"}}>{t("Linux_admin")}</li>
                <li className="scale-on-focus-1150 text-align-center m-0-5" style={{width:"100%", color: "var(--color-4)"}}>{t("and_Physioterapist")}</li>
                
            </ul>
        </>
    )
}

export default Root;
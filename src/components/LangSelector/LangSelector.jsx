import { useTranslation } from "react-i18next";

function LangSelector ({ changeCallback }) {
    const {i18n} = useTranslation();

    const availableLangs = {"ca": "Ca", "en": "En", "es": "Es"}

    return (
        <div>
        <select
            style={{backgroundColor: "var(--gray-1)", color: "var(--gray-9)"}} 
            value={i18n.resolvedLanguage} 
            onChange={e=>{
                i18n.changeLanguage(e.target.value);
                changeCallback();
                }}
        >
        {Object.keys(availableLangs).map((lang)=>{
            return <option value={lang} key={lang}>{availableLangs[lang]}</option>
        })}
        </select>
        </div>
    )

}
export default LangSelector
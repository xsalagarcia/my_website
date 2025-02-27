import { useTranslation } from 'react-i18next';

function Footer () {
    const { t } = useTranslation();

    function handleEmailButtonClick(){
        window.location.href = "mailto:example@example.com";
    }

    return (
        <footer>
            <div className="center-block width-fit padding-0-5">
                <a className="bs-icons margin-0-5" data-icon="&#xF3ED;" href="https://github.com/xsalagarcia"
                style={{fontSize:"2rem"}}></a>
                <a className="bs-icons margin-0-5" data-icon="&#xF7F7;" href="https://github.com/xsalagarcia"
                style={{fontSize:"2rem"}}></a>
                <a className="bs-icons margin-0-5" data-icon="&#xF472;" href="https://github.com/xsalagarcia"
                style={{fontSize:"2rem"}}></a>
            </div>
            <div className="text-align-center"><a href="" className='link invert-colors'>&#169; {t("license_on_github_repo")}</a></div>
            <button className="btn-lg bs-icons invert-colors center-block margin-0-5" data-icon="&#xF84B;" onClick={handleEmailButtonClick}> {t("email_me")}</button>

        </footer>
    )
}

export default Footer;
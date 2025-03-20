import { useTranslation } from 'react-i18next';
import SkillCard from "../components/SkillCard";
import kotlinIco from "../assets/images/svg-icons/kotlin-svgrepo-com.svg";
import pythonIcon from "../assets/images/svg-icons/python-svgrepo-com.svg"
import linuxIcon from "../assets/images/svg-icons/linux-svgrepo-com.svg";
import databasesIcon from "../assets/images/svg-icons/database-svgrepo-com.svg";
import htmlIcon from "../assets/images/svg-icons/html-5-svgrepo-com.svg";
import javascriptIcon from "../assets/images/svg-icons/javascript-svgrepo-com.svg"
import javaIcon from "../assets/images/svg-icons/java-svgrepo-com.svg";
import gitIcon from "../assets/images/svg-icons/git-svgrepo-com.svg";
import securityIcon from "../assets/images/svg-icons/safety-svgrepo-com.svg";
import webdevIcon from "../assets/images/svg-icons/react-svgrepo-com.svg";
import mobiledevIcon from "../assets/images/svg-icons/git-svgrepo-com.svg";
import learningIcon from "../assets/images/svg-icons/idea-svgrepo-com.svg";

function Skills() {
    const {t} = useTranslation("skills");
    
    return (
        <>
        <h1 className="text-align-center">{t("skills", { ns: "skills" })}</h1>
        <p>{t("introduction", { ns: "skills" })}</p>
        <div style={{display: "flex", flexFlow: "row wrap", }}>

            <SkillCard 
                imageSrc={pythonIcon}
                title={t("python", { ns: "skills" })}
                content={t("python_text", {ns: "skills"})} 
                url={"https://blalba.com"} />

            <SkillCard 
                imageSrc={javascriptIcon}
                title={t("javascript", { ns: "skills" })}
                content={t("javascript_text", { ns: "skills" })} />

            <SkillCard 
                imageSrc={htmlIcon}
                title={t("html_css", { ns: "skills" })}
                content={t("html_css_text", { ns: "skills" })} />

            <SkillCard 
                imageSrc={javaIcon}
                title={t("java", { ns: "skills" })}
                content={t("java_text", { ns: "skills" })} />

            <SkillCard 
                imageSrc={kotlinIco}
                title={t("kotlin", { ns: "skills" })}
                content={t("kotlin_text", { ns: "skills" })} />

            <SkillCard 
                imageSrc={databasesIcon}
                title={t("databases", { ns: "skills" })}
                content={t("databases_text", { ns: "skills" })} />

            <SkillCard 
                imageSrc={linuxIcon}
                title={t("linux", { ns: "skills" })}
                content={t("linux_text", { ns: "skills" })} />

            <SkillCard 
                imageSrc={gitIcon}
                title={t("git", { ns: "skills" })}
                content={t("git_text", { ns: "skills" })} />

            <SkillCard 
                imageSrc={securityIcon}
                title={t("security", { ns: "skills" })}
                content={t("security_text", { ns: "skills" })} />

            <SkillCard 
                imageSrc={webdevIcon}
                title={t("webdev", { ns: "skills" })}
                content={t("webdev_text", { ns: "skills" })} />


            <SkillCard 
                imageSrc={mobiledevIcon}
                title={t("mobiledev", { ns: "skills" })}
                content={t("mobiledev_text", { ns: "skills" })} />


            <SkillCard 
                imageSrc={learningIcon}
                title={t("learning", { ns: "skills" })}
                content={t("learning_text", { ns: "skills" })} />

                

        </div>
        </>
        
    )
}

export default Skills;
import { useTranslation } from 'react-i18next';
import ProjectCard from '../../components/ProjectCard/ProjectCard';





function DemoProjects() {

    const {t} = useTranslation("demos");
    const mobileProjects = t("mobile_projects", {returnObjects: true});
    const webProjects = t("web_projects", {returnObjects: true});
    const desktopCliProjects = t("desktop_cli_projects", {returnObjects: true});

    return (
        <>
        <h1 className="text-align-center">{t("demo_projects")}</h1>
            <h2>{t("mobile_development")}</h2>
            <div className='row'>
            {mobileProjects.map(project => {
                return (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        content={project.content}
                        imageUrl={project.image_url}
                        tags={project.tags}
                        urls={project.urls}

                    />
                )
            })}

            </div>
            <h2>{t("web_development")}</h2>
            {webProjects.map(project => {
                    return (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            content={project.content}
                            imageUrl={project.image_url}
                            tags={project.tags}
                            urls={project.urls}

                        />
                    )
            })}
            {<h2>{t("desktop_and_cli")}</h2>}
            {desktopCliProjects.map(project => {
                return (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        content={project.content}
                        imageUrl={project.image_url}
                        tags={project.tags}
                        urls={project.urls}

                    />
                )
            })}

        </>
    )
}

export default DemoProjects;
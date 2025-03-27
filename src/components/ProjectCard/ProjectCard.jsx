import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

/**
 * 
 * @param {Object} props
 * @param {String} props.className
 * @param {String} props.title
 * @param {String} props.content
 * @param {String} props.imageUrl 
 * @param {Array<String>} props.tags
 * @param {Array<Object>} props.urls {string: "text", url: "urlpath"}
 */
function ProjectCard({ className, title, content, imageUrl, tags, urls}) {
    return(
        <div className={`${className} ${styles.ProjectCard}`}>
            <h3>
                {title}
            </h3>
            <div className={styles.contentImage}>
                <div className={styles.content}>
                    <div dangerouslySetInnerHTML={{ __html: content }}>
                    </div>
                    {urls.map(url=>{return(<a key={url.text} href={url.url}>{url.text}</a>)})}
                </div>
                <figure>
                    <img src={imageUrl} alt={`${title} screenshot`} />
                </figure>
            </div>
            <ul className="tags-list">
                {tags.map(tag=>{return(<li key={tag}>{tag}</li>)})}
            </ul>
        </div>

    )

}

ProjectCard.propTypes = { //className, title, content, imageUrl, tags, urls
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    urls: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ),
};

export default ProjectCard;

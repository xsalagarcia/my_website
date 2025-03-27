import PropTypes from "prop-types";
import styles from "./SkillCard.module.css";

/**
 * 
 * @param {Object} props 
 * @param {String} props.imageUrl Image url
 * @param {String} props.title Title content
 * @param {String} props.content Some content text.
 * @param {string | null} props.url Optional, default is null
 */
function SkillCard({imageSrc, title, content, url = null}){
    return(
    <a href={url} className={styles.SkillCard}>
        <div>
            <div className={styles.title}>
                <img src={imageSrc} alt="icon image" width="16" height="16"/>
                {title}
            </div>
            <div className={styles.content}
                dangerouslySetInnerHTML={{ __html: content }}>
            </div>
        </div>
    </a>

    )
}

SkillCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string,
};

// **Default Props (Optional)**
SkillCard.defaultProps = {
    url: "",
};

export default SkillCard;
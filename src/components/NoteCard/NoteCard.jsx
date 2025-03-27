import PropTypes from "prop-types";
import { Link } from "react-router";
import styles from "./NoteCard.module.css";

function NoteCard( {name, abstract, tags} ) {

    
    return (
        <li className={styles.NoteCard}>
            <Link to={name}  >
                <h6>{name}</h6>
                <p className='margin-0'>{abstract}</p>
                <ul className="tags-list" style={{justifyContent: "left"}}>
                    {tags.map(tag=>{return <li key={tag}>{tag}</li>})}
                </ul>
            </Link>
        </li>
    )
}

NoteCard.propTypes = {
    name: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
}

export default NoteCard;

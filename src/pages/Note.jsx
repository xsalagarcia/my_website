import PropTypes from "prop-types";

import MarkdownRenderer from "../components/MarkdownRenderer";

function Note({mardownContent, name}) {

    return (
        <article>
            <h1>{name}</h1>
            <MarkdownRenderer markdownContent={mardownContent}></MarkdownRenderer>
            {/*<div>{mardownContent}</div>*/}
        </article>
    )
}

Note.propTypes = {
    mardownContent: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Note
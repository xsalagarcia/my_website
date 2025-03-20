import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PropTypes from "prop-types";

import MarkdownRenderer from "../components/MarkdownRenderer";

function Note() {
    let { noteName } = useParams();
    const [showedNote, setShowedNote ] = useState(false);

    useEffect(()=> {
        fetch(`//${import.meta.env.VITE_NOTES_URL}/note/${noteName}`, {method: "GET"})
        .then(response=>{
            response.text().then(text=>{
                setShowedNote({title: noteName, content: text});
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }, []);

    return (
        <article>
            <h1>{showedNote.name}</h1>
            {showedNote && <MarkdownRenderer markdownContent={showedNote.content}></MarkdownRenderer>}
        </article>
    )
}

Note.propTypes = {
    mardownContent: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Note
import { useTranslation } from 'react-i18next';


import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import PropTypes from "prop-types";

import MarkdownRenderer from "../components/MarkdownRenderer";
import FloatingScrollTopButton from "../components/FloatingScrollTopButton";

function Note() {
    const {t} = useTranslation("notes");


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
    }, [noteName]);

    return (
        <>
        <h1 style={{textAlign: "center"}}>{t("public_notes")}</h1>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
            <Link 
                className="btn-icon-lg btn bs-icons  flex-shrink-0" 
                data-icon="&#xF12A;" 
                style={{borderRadius: "50%", display: "inline-block"}}
                to="/public-notes"
                ></Link>
            <h2 className='margin-0 flex-shrink-1' >{showedNote.title}</h2>
        </div>
        <article style={{marginBottom: "4rem"}}>
            {showedNote && <MarkdownRenderer markdownContent={showedNote.content}></MarkdownRenderer>}
        </article>
            {showedNote && <FloatingScrollTopButton/>}
        </>
    )
}

Note.propTypes = {
    mardownContent: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Note
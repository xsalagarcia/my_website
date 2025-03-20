import { useEffect } from "react";

function NoteCard( {note, setShowedNote} ) {

    function handleClick(e) {
        e.preventDefault();
        fetch(`//${import.meta.env.VITE_NOTES_URL}/note/${note.name}`, {method: "GET"})
        .then(response=>{
            response.text().then(text=>{
                console.log("aaa")
                console.log(text);
                setShowedNote({title: note.name, content: text});
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    
    return (
        <li className="note">
            <a href="" onClick={handleClick}>
                <h6>{note.name}</h6>
                <p className='margin-0'>{note.abstract}</p>
                <ul className="tags-list" style={{justifyContent: "left"}}>
                    {note.tags.map(tag=>{return <li key={tag}>{tag}</li>})}
                </ul>
            </a>
        </li>
    )
}

export default NoteCard;
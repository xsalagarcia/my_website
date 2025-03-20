import { useCollapse } from "../hooks/useCollapse";
import NoteCard from "./NoteCard";


function Category ({ category, setShowedNote }) {

    const {elementRef, toggleCollapse } = useCollapse();


    return (
    <div className='category-card'>
        <h5 >
            <a href="" style={{display: "block"}} onClick={e=>{e.preventDefault();toggleCollapse();}}>{category.name}</a> 
        </h5>
        <ul className="collapsable collapsed notes-list" ref={elementRef}>
        {category.notes.map(note=> {
            return <NoteCard key={note.name} note={note} setShowedNote={setShowedNote}/>
        })}
        </ul>

        

    </div>
    )
}

export default Category;
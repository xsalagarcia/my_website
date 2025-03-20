import PropTypes from "prop-types";
import { useCollapse } from "../hooks/useCollapse";
import NoteCard from "./NoteCard";


function Category ({ category }) {

    const {elementRef, toggleCollapse } = useCollapse();


    return (
    <div className='category-card'>
        <h5 >
            <a href="" style={{display: "block"}} onClick={e=>{e.preventDefault();toggleCollapse();}}>{category.name}</a> 
        </h5>
        <ul className="collapsable collapsed notes-list" ref={elementRef}>
        {category.notes.map(note=> {
            return <NoteCard key={note.name} name={note.name} abstract={note.abstract} tags={note.tags}/>
        })}
        </ul>

        

    </div>
    )
}

Category.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        notes: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                abstract: PropTypes.string.isRequired
            })
        )
    })

}

export default Category;
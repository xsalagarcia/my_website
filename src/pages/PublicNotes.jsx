import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';


import { useCollapse } from "../hooks/useCollapse";
import Category from "../components/Category";
import MarkdownRenderer from "../components/MarkdownRenderer";






function PublicNotes() {

    const {t} = useTranslation("notes");
/*
    const mocked_data = [
        {
        "name": "Category 0",
        "notes": [
          {
            "name": "note 0 for cat Category 0",
            "abstract": "the note 0",
            "tags": []
          },
          {
            "name": "note 1 for cat Category 0",
            "abstract": "the note 1",
            "tags": [
              "tag 0"
            ]
          },
          {
            "name": "note 2 for cat Category 0",
            "abstract": "the note 2",
            "tags": [
              "tag 0",
              "tag 1"
            ]
          },
          {
            "name": "note 3 for cat Category 0",
            "abstract": "the note 3",
            "tags": [
              "tag 0",
              "tag 1",
              "tag 2"
            ]
          },
          {
            "name": "note 4 for cat Category 0",
            "abstract": "the note 4",
            "tags": [
              "tag 0",
              "tag 1",
              "tag 2",
              "tag 3"
            ]
          }
        ]
      } ,
      {
        "name": "Category 1",
        "notes": [
          {
            "name": "note 0 for cat Category 1",
            "abstract": "the note 0",
            "tags": []
          },
          {
            "name": "note 1 for cat Category 1",
            "abstract": "the note 1",
            "tags": [
              "tag 0"
            ]
          },
          {
            "name": "note 2 for cat Category 1",
            "abstract": "the note 2",
            "tags": [
              "tag 0",
              "tag 1"
            ]
          },
          {
            "name": "note 3 for cat Category 1",
            "abstract": "the note 3",
            "tags": [
              "tag 0",
              "tag 1",
              "tag 2"
            ]
          },
          {
            "name": "note 4 for cat Category 1",
            "abstract": "the note 4",
            "tags": [
              "tag 0",
              "tag 1",
              "tag 2",
              "tag 3"
            ]
          }
        ]
      } ,
      {
        "name": "Category 2",
        "notes": [
          {
            "name": "note 0 for cat Category 2",
            "abstract": "the note 0",
            "tags": []
          },
          {
            "name": "note 1 for cat Category 2",
            "abstract": "the note 1",
            "tags": [
              "tag 0"
            ]
          },
          {
            "name": "note 2 for cat Category 2",
            "abstract": "the note 2",
            "tags": [
              "tag 0",
              "tag 1"
            ]
          },
          {
            "name": "note 3 for cat Category 2",
            "abstract": "the note 3",
            "tags": [
              "tag 0",
              "tag 1",
              "tag 2"
            ]
          },
          {
            "name": "note 4 for cat Category 2",
            "abstract": "the note 4",
            "tags": [
              "tag 0",
              "tag 1",
              "tag 2",
              "tag 3"
            ]
          }
        ]
      } ,
      {
        "name": "Category 3",
        "notes": [
          {
            "name": "note 0 for cat Category 3",
            "abstract": "the note 0",
            "tags": []
          },
          {
            "name": "note 1 for cat Category 3",
            "abstract": "the note 1",
            "tags": [
              "tag 0"
            ]
          },
          {
            "name": "note 2 for cat Category 3",
            "abstract": "the note 2",
            "tags": [
              "tag 0",
              "tag 1"
            ]
          },
          {
            "name": "note 3 for cat Category 3",
            "abstract": "the note 3",
            "tags": [
              "tag 0",
              "tag 1",
              "tag 2"
            ]
          },
          {
            "name": "note 4 for cat Category 3",
            "abstract": "the note 4",
            "tags": [
              "tag 0",
              "tag 1",
              "tag 2",
              "tag 3"
            ]
          }
        ]
      } ,
      {
        "name": "Category 4",
        "notes": [
          {
            "name": "note 0 for cat Category 4",
            "abstract": "the note 0",
            "tags": []
          },
          {
            "name": "note 1 for cat Category 4",
            "abstract": "the note 1",
            "tags": [
              "tag 0"
            ]
          },
          {
            "name": "note 2 for cat Category 4",
            "abstract": "the note 2",
            "tags": [
              "tag 0",
              "tag 1"
            ]
          },
          {
            "name": "note 3 for cat Category 4",
            "abstract": "the note 3",
            "tags": [
              "tag 0",
              "tag 1",
              "tag 2"
            ]
          },
          {
            "name": "note 4 for cat Category 4",
            "abstract": "the note 4",
            "tags": [
              "tag 0",
              "tag 1",
              "tag 2",
              "tag 3"
            ]
          }
        ]
      }
      ]
*/
    const [showedNote, setShowedNote] = useState(null);

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch(`//${import.meta.env.VITE_NOTES_URL}/category/with_all`, {method: "GET"})
        .then(rawCategories=>{
            rawCategories.json()
            .then(categoriesObj=>setCategories(categoriesObj))
        })
        .catch((error)=> console.log(error));
    }, []);

    return (
    <>
        {showedNote == null && <>
            <h1>{t("public_notes")}</h1>
            <p className='text-align-justify'>{t("introduction")}</p>
            {categories.map(category => {
                return <Category key={category.name}category={category} setShowedNote={setShowedNote} />
            })}
        </>}

        {showedNote != null && <>
            <div>
                <h2><button className="icon-btn btn-lg" onClick={()=>setShowedNote(null)}>patras</button>{showedNote.title} </h2>
                <MarkdownRenderer markdownContent={showedNote.content}></MarkdownRenderer>
            </div>
            </>
        }
    </>
    )
    
}

export default PublicNotes;
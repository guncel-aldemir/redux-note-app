import React from "react";
import Note from "../note/Note";
import "../../assets/styles/componentStyle/Notes.scss"
import {useSelector} from "react-redux"
import { selectNote} from "../../redux/Note/NoteSlice"
const Notes = ({text}) => {
  const lists = useSelector(selectNote);

  return <div className="addNotes">
    <div className="notes">
    <ul className="notes-lists">
      {
        lists.map((item)=>(
          <li key={item.id}><Note item ={item} text={item.text}  color={item.color} key={item.id}/></li>
        ))
      }
    </ul>
    </div>
   
    
  </div>;
};

export default Notes;

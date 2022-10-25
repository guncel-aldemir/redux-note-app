import React from "react";
import "../../assets/styles/componentStyle/Note.scss"
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/Note/NoteSlice";
import {TiDelete} from "react-icons/ti"
const Note = ({text,color,item}) => {
  const dispatch = useDispatch();
 
  const handleDelete =  async (key)=>{
if(window.confirm("Are You Sure to Delete Note ?"))
dispatch(deleteNote(key))
  }
  return <div className={`note ${color} `} key={item.id}>
    <div>
    <TiDelete size={20} color="#fff" onClick={()=>handleDelete(item.id)} />
    </div>
    <p>{text}</p>
  </div>;
};

export default Note;

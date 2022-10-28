import React,{useState} from "react";
import "../../assets/styles/componentStyle/Form.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { addNote,toogleCheck,selectColors,selectSelectedColor, filterNote } from "../../redux/Note/NoteSlice";
import {useSelector,useDispatch} from "react-redux"

const Form = () => {
  const [text,setText]= useState("")
 
  const dispatch = useDispatch()
  const colors = useSelector(selectColors);
  const selectedColor = useSelector(selectSelectedColor);


  const handleText = async (e)=>{
if(!text){
  alert("Make sure Your Note not empty!")
 return;
} else if(!selectedColor){
  alert("Please make you sure select a color.")
  return;
}
e.preventDefault();
await dispatch(addNote({text:text, color:selectedColor.name}))

setText("")
  }
const handleChange = async (e)=>{
  
  dispatch(filterNote(e.target.value))
}
  
  return (
    <div className="form">
      <form className="form-area" onSubmit={(e)=>e.preventDefault()}>
        <div className="search">
          <AiOutlineSearch size={24} color="#fff" />
          <input type="search" className="input" placeholder="Search..."  onChange={handleChange}/>
        </div>
       
        <div className="form-bottom">
        <input
          type="textarea"
          className={`textarea ${selectedColor}`}
          placeholder="Enter Your Note Here..." value={text} onChange={(e)=>setText(e.target.value)}
        />
          <div className="form-bottom-side">
            <div className="colors">
              {
                colors.map((item)=>(
                  <button key={item.id} className={`${item.name}-color`} onClick={()=>dispatch(toogleCheck({id:item.id}))}   >
                  {item.isChecked && <AiOutlineCheck />}
                </button>
                ))
              }
            </div>
           
            <div className="addButton">
            <button className="add" onClick={handleText}>Add </button>
            </div>
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default Form;

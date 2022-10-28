import { createSlice, nanoid } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    colors: [
      {
        id: "1",
        name: "first",
        isChecked: false,
      },
      {
        id: "2",
        name: "second",
        isChecked: false,
      },
      {
        id: "3",
        name: "third",
        isChecked: false,
      },
      {
        id: "4",
        name: "fourth",
        isChecked: false,
      },
      {
        id: "5",
        name: "fifth",
        isChecked: false,
      },
    ],
   selectColor:null,
    filterItem:""
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ text , color}) => {
        return {
          payload: {
            id: nanoid(),
            color,
            text,
            
          },
        };
      },
    },
    toogleCheck: (state, action) => {
      const { id } = action.payload;
      const filtered = state.colors.find((item)=>item.isChecked === true)
      if(typeof filtered != "undefined"){
        filtered.isChecked =false;
      }
      const toggle = state.colors.find((item) => item.id === id);
    
      toggle.isChecked = true
      
      state.selectColor= toggle;
      
    },
    deleteNote:(state,action)=>{
      const id = action.payload;
      const index = state.items.findIndex((item)=>item.id === id);
      state.items.splice(index,1);
    },
    filterNote: (state,action)=>{
      state.filterItem= action.payload;

    }
   
  },
});
export const selectNote = (state) => state.notes.items;
export const selectColors = (state) => state.notes.colors;
export const selectSelectedColor =(state)=>state.notes.selectColor;
export const  selectFilterNotes = (state)=>{
if(state.notes.filterItem === ""){
  return state.notes.items;
} 
return state.notes.items.filter((item)=>item.text.includes(state.notes.filterItem) )
}

export const { addNote, toogleCheck,deleteNote ,filterNote} = noteSlice.actions;
export default noteSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import NoteSlice from "./Note/NoteSlice";

const store =configureStore({
    reducer:{
        notes:NoteSlice
    }
})

export default store;
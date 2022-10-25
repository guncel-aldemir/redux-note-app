import React from "react";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import Notes from "../components/notes/Notes";
import "../assets/styles/componentStyle/Home.scss"

const Home = () => {
  return <div className="container">
    <div className="row">
        <div className="home">
            <Header/>
            <Form/>
        </div>
        <Notes/>
    </div>
    
  </div>;
};

export default Home;

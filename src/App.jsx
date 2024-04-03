//import DataTable from './components/DataTable';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import DataTable from './components/DataTable';
import Footer from './components/Footer.jsx';
import Projects from './data/Data.js'
import { useState } from 'react';
import React from 'react';
import "./styles/App.scss";

function App() {
  const [activeCategory, setActiveCategory] = useState("Quizz")
  const categories = Projects.reduce((acc, project) =>
    acc.includes(project.category) ? acc : acc.concat(project.category) ,
    []
  )

  return (
    <>
      <SideBar categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
      <DataTable categories={categories} projects={Projects} activeCategory={activeCategory}/>
      <Footer/>
    </>
  );
}


export default App;

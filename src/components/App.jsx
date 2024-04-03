//import DataTable from './components/DataTable';
import Footer from './Footer.jsx';
import SideBar from './SideBar.jsx';
import DataTable from './DataTable.jsx';
import Projects from '../data/Data.js'
import { useState } from 'react';
import React from 'react';
import "../styles/App.scss";

function App() {
  const [activeCategory, setActiveCategory] = useState("Projet 1")
  const categories = Projects.reduce((acc, project) =>
    acc.includes(project.category) ? acc : acc.concat(project.category) ,
    []
  )

  return (
    <>
      <SideBar categories={categories} setActiveCategory={setActiveCategory}/>
      <DataTable categories={categories} projects={Projects} activeCategory={activeCategory}/>
      <Footer/>
    </>
  );
}


export default App;

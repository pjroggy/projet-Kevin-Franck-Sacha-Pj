//import DataTable from './components/DataTable';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import DataTable from './components/DataTable';
import React from 'react';
import "./App.scss";

function App() {
  return (
    <>
      <body>
        <SideBar/>
        <DataTable />
        <Footer />
      </body>
    </>
  )
}


export default App;

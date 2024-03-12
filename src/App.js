import React from 'react';
import './App.css';
import LatestProjects from './components/LatestProjects';
import ClientsKindWords from './components/ClientsKindWords';
import LetsDiscussProject from './components/LetsDiscussProject';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
     <div>
       <Navbar/>
       <LatestProjects />
       <ClientsKindWords />
       <LetsDiscussProject/>
       <Footer/>
       </div>
  );
}

export default App;

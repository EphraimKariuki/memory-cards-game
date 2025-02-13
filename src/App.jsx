import { useState } from 'react'
import PageHeader from './components/header';
import MainSection from './components/mainSection';
import "./styles/main.css"

function App() {
  return (
    <div className='container'>
      <PageHeader/>
      <MainSection/>
    </div>  
  );
}

export default App


import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';


function App() {
  const [mode,setmode]=useState("light")
   const toggleMode=()=>{
     if (mode==="light") {
      setmode("dark")
      document.body.style.backgroundColor="#204766c7"
     }
     else{
      setmode("light")
      document.body.style.backgroundColor="white"
     }
   } 
  
    return (
    <>
      
      <Navbar mode={mode} toggleMode={toggleMode}/>

      <TextForm mode={mode}/>
    </>
  );
}

export default App;

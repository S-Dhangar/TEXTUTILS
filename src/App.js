import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
function App() {
 
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

setTimeout(()=>{
  setAlert(null)
},2000);

  }
 
  const ToggleMode=(e)=>{
   
    if(e.target.name === "light"){
      showAlert("Light mode has been enabled","success");
      setMode(e.target.name);
      document.body.style.backgroundColor = "white";
      document.title = "TEXTUTILS : Light mode"
    }
    
    if(e.target.name === "green"){
      showAlert("Green mode has been enabled","success");
      setMode(e.target.name);
      document.body.style.backgroundColor = 'green';
      document.title = "TEXTUTILS : Green mode"
    }
    
    if(e.target.name === "blue"){
      showAlert("Blue mode has been enabled","success");
      setMode(e.target.name);
      document.body.style.backgroundColor = 'rgb(4,39,67)';
      document.title = "TEXTUTILS : Blue mode"
    }
    
    if(e.target.name === "dark"){
      showAlert("Dark mode has been enabled","success");
      setMode(e.target.name);
      document.body.style.backgroundColor = 'black';
      document.title = "TEXTUTILS : light mode"
    }
     
  }
  return (
    <>
    <Navbar title = "TEXTUTILS" mode={mode} ToggleMode={ToggleMode}/>
    <Alert alert = {alert} />
    <div className="container my-3">
    <Textform showAlert = {showAlert} heading="Enter the text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;

import { useState } from "react"
import React from 'react'

export default function Textform(props) {
    let pstyle;
    let  boxstyle;
    if(props.mode !== "light"){
       
      boxstyle={
        backgroundColor:"gray",
    }
        if(props.mode === "light"){
        pstyle={
            color:'black',
        }
      }
      else{
        pstyle={
          color:'white',
      }
      }
    }
    const btndivstyle={
        display:"flex",
        
        padding:"20px"
    }
    const btnstyle={
        width:"250px",
        
        marginBottom:"10px"
    }

const handleInputUpper=()=>{
    var str = text.toUpperCase();
    setText(str);
    props.showAlert("Text changed to upper case","success");

}
const handleInputLower=()=>{
    var str = text.toLowerCase();
    setText(str);
    props.showAlert("Text changed to Lower case","success");

}
const handleOnchange = (e) =>{
    
    setText(e.target.value);

}

const countChars = () =>{
    let characterCount = 0;
    let num = 0;
   const newtext = text.trim().replace(/\s+/g, " ");

    for(let i=0;i<newtext.length;i++){
      if(newtext[i]===" " || newtext[i]==="\n"){
        num++;
      }
      else{
        characterCount++;
      }
    }
    if(characterCount>0){
      num++;
    }

    setCountWords(num);
    setCount(characterCount);
    const time = num/3.8;
    setAvg_time(time+" seconds");
    props.showAlert("Result is ready","success");

    
}
const clear=()=>{
   setText("");
   setCountWords(0);
   setCount(0);
   props.showAlert("Khatam TATA BYE BYE","success");

}
    const [text,setText] = useState("");
    const [count_char,setCount] = useState("no");
    const [words,setCountWords] = useState("no");
    const [avg_time,setAvg_time] = useState("");


  return (
    <div>

<div className="mb-3">
  <label htmlFor="mybox" className="form-label"><h1 style={pstyle}>{props.heading}</h1></label>
  <textarea className="form-control" style={boxstyle} onChange={handleOnchange} id="mybox" rows="8" value={text}>console.log({text})</textarea>
</div>
<div className="row" style={btndivstyle}>
  <div className="col">
    <button style={btnstyle} className="btn btn-primary mx-2" onClick={handleInputUpper}>
      Convert to UpperCase
    </button>
  </div>
  <div className="col">
    <button style={btnstyle} className="btn btn-primary mx-2" onClick={handleInputLower}>
      Convert to LowerCase
    </button>
  </div>
  <div className="col">
    <button style={btnstyle} className="btn btn-primary mx-2" onClick={countChars}>
      Count 
    </button>
  </div>
</div>
<p style={pstyle}>There are {count_char} characters and {words} words in this text box</p>
<p style={{backgroundColor:"gray",borderRadius:"4px", fontSize:"15px", height:"30px",textAlign:"center"}}>Average time to read : {avg_time}</p>
<div className="row">
  <div className="col">
    <button style={btnstyle} className="btn btn-primary mx-2" onClick={clear}>
      Clear TextBox
    </button>
  </div>
</div>

    </div>

  )
}

import React from 'react'

export default function Navbar(props) {
  const modes={
    display:"flex",
    

  }
  return (
    <div>
<nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <div className={`navbar-brand ${props.mode === 'light' ? 'text-black' : 'text-light'}`}>{props.title}</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className={`nav-link active ${props.mode === 'light' ? 'text-black' : 'text-light'}`} aria-current="page" href="/">Home</div>
        </li>
        
        <li className="nav-item">
          <div className={`nav-link disabled ${props.mode === 'light' ? 'text-black' : 'text-light'}`}>About</div>
        </li>
      </ul>
      <div className={`nav-link disabled ${props.mode === 'light' ? 'text-black' : 'text-light'}`}><b>Modes</b></div>

      <div style={modes}>
        <button name="light" style={{cursor:"pointer",backgroundColor:"light",width:"25px",height:"25px",margin:"7px",borderRadius:"5px"}} onClick={props.ToggleMode}></button>
        <button name="dark" style={{cursor:"pointer",backgroundColor:"black",width:"25px",height:"25px",margin:"7px",borderRadius:"5px"}} onClick={props.ToggleMode}></button>
        <button name="blue" style={{cursor:"pointer",backgroundColor:"blue",width:"25px",height:"25px",margin:"7px",borderRadius:"5px"}} onClick={props.ToggleMode}></button>
        <button name="green" style={{cursor:"pointer",backgroundColor:"green",width:"25px",height:"25px",margin:"7px",borderRadius:"5px"}} onClick={props.ToggleMode}></button>
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}

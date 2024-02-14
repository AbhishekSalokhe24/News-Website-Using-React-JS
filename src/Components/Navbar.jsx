const date = new Date().toString().slice(0,16);
function Navbar({setcategory,setCountry}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><span className="badge rounded-pill text-bg-warning fs-4">News_Dekho</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
               <li className="nav-item" style={{cursor:"pointer"}}>
                  <div className="nav-link" onClick={()=>setcategory("technology")} style={{color:"yellow"}}>Technology</div>
               </li>
               <li className="nav-item" style={{cursor:"pointer"}}>
                  <div className="nav-link" onClick={()=>setcategory("business")} style={{color:"yellow"}}>Business</div>
               </li>
               <li className="nav-item" style={{cursor:"pointer"}}>
                  <div className="nav-link" onClick={()=>setcategory("science")} style={{color:"yellow"}}>Science</div>
               </li>
               <li className="nav-item" style={{cursor:"pointer"}}>
                  <div className="nav-link" onClick={()=>setcategory("health")} style={{color:"yellow"}}>Health</div>
               </li>
               <li className="nav-item" style={{cursor:"pointer"}}>
                  <div className="nav-link" onClick={()=>setcategory("sports")} style={{color:"yellow"}}>Sports</div>
               </li>
               <li className="nav-item" style={{cursor:"pointer"}}>
                  <div className="nav-link" onClick={()=>setcategory("entertainment")} style={{color:"yellow"}}>Entertainment</div>
               </li>
            </ul>
            <div className="dropdown">
  <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Country
  </button>
  <ul className="dropdown-menu">
      <li><div className="dropdown-item" onClick={()=>{setCountry("IN")}} style={{cursor:"pointer"}}>India</div></li>
      <li><div className="dropdown-item" onClick={()=>{setCountry("US")}} style={{cursor:"pointer"}}>United States</div></li>
      <li><div className="dropdown-item" onClick={()=>{setCountry("GB")}} style={{cursor:"pointer"}}>United Kingdom</div></li>
      <li><div className="dropdown-item" onClick={()=>{setCountry("CA")}} style={{cursor:"pointer"}}>Canada</div></li>
      <li><div className="dropdown-item" onClick={()=>{setCountry("DE")}} style={{cursor:"pointer"}}>Germany</div></li>
      <li><div className="dropdown-item" onClick={()=>{setCountry("FR")}} style={{cursor:"pointer"}}>France</div></li>
      <li><div className="dropdown-item" onClick={()=>{setCountry("IT")}} style={{cursor:"pointer"}}>Italy</div></li>
      <li><div className="dropdown-item" onClick={()=>{setCountry("AU")}} style={{cursor:"pointer"}}>Australia</div></li>
      <li><div className="dropdown-item" onClick={()=>{setCountry("JP")}} style={{cursor:"pointer"}}>Japan</div></li>
      <li><div className="dropdown-item" onClick={()=>{setCountry("CN")}} style={{cursor:"pointer"}}>China</div></li>
  </ul>
</div>

</div>
</div>
</nav>
  )
}

export default Navbar

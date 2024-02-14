import { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import Footer from './Components/Footer'

//API URL : https://newsapi.org/docs/endpoints/top-headlines

function App() {
  const [category, setcategory] = useState("general");
  const [country, setCountry] = useState("in");

  return (
    <>
     <Navbar setcategory={setcategory} setCountry={setCountry}/>
     <div  style={{display: "flex", alignItems: "center", width: "100%", justifyContent: "center", flexWrap: "wrap", padding: "1rem"}}>
        <NewsBoard category={category} country={country} />
     </div>
     <Footer/>
    </>
  )
}

export default App

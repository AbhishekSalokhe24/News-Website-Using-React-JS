import { useState,useEffect } from "react"
import NewsItem from "./NewsItem";
function NewsBoard({category,country}) {

  const [article,setArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setArticle(data.articles);
      } catch (error) {
        // Handle errors here
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [category, country]);
  const date = new Date().toString().slice(0,16);

  let countryName;
  switch (country) {
      case "IN":
          countryName = "India";
          break;
      case "US":
          countryName = "United States";
          break;
      case "GB":
          countryName = "United Kingdom";
          break;
      case "CA":
          countryName = "Canada";
          break;
      case "DE":
          countryName = "Germany";
          break;
      case "FR":
          countryName = "France";
          break;
      case "IT":
          countryName = "Italy";
          break;
      case "AU":
          countryName = "Australia";
          break;
      case "JP":
          countryName = "Japan";
          break;
      case "CN":
          countryName = "China";
          break;
      default:
          countryName = "India";
  }
  



  return (
    <div style={{display:"flex" ,justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
       <button type="button" className="btn btn-danger btn-lg" >Date: {date}</button>
      <h2 className="text-center m-4 fw-bold">Latest News in <span className="badge bg-danger">{countryName}</span></h2>
      <div style={{display:"flex", flexWrap:"wrap",alignItems:"center", justifyContent:"center"}}>
      {article.map((news,index)=>{
        return <NewsItem key={index} description={news.description} src={news.urlToImage} url={news.url} title={news.title}  />
      })}
      </div>
    
    </div>
  )
}

export default NewsBoard

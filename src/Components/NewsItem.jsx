
import image from '../assets/News.jpg'
export default function NewsItem({title,src,url,description}) {
  return (

    <div>
       <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-4 px-2 py-2 " style={{maxWidth:"300px"}}>
        <img src={src?src:image} style={{height:"240px",width:"100%"}} className="card-img-top" alt="news Image"/>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,45)+"...."}</h5>
          <p className="card-text">{description ? description.slice(0,95) +"...." : "News Description not availabel"}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div> 
    </div>

  )
}

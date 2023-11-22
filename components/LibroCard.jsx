import "./LibroCard.css"

export default function LibroCard ({libro}) {
   const url = `/libros/${libro.ID}`
    return (
       <div className="card col libCard" >
         <img src={libro.PORTADA_URL} className="card-img-top" ></img>
             <a href={url}>
               <div className="card-body" >
                  <h4 className="card-title">{libro.TITULO}</h4>
                  <p className="card-text">{libro.AUTOR}</p> 
                  <p className="card-text">{libro.year}</p>
               </div> 
             </a>
       </div>
    )
}
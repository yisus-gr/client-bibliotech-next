import "../../../components/LibroView.css"

async function getLibro(id) {
    const url = `http://localhost:4000/api/libros/${id}`
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export default async function Page ({params}) {
    const libro = await getLibro(params.id)
    
    return(
        <div className="principal">
            <div className="card" style={{padding: "1rem", width: "80%"}}>
                <h1>
                        {libro.TITULO}
                </h1> <br />
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={libro.PORTADA_URL} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-9">
                        <ul>
                            <li> <b>IBSN: </b> <i>{libro.ISBN}</i></li>
                            <li><b>Editorial: </b>{libro.EDITORIAL}</li>
                            <li><b>Año de publicacion: </b> {libro.year} </li>
                            <li><b>Sinopsis: </b></li>
                            <li>{libro.SINOPSIS}</li>
                        </ul>
                    </div>
                </div>
                <div className="row g-0 mt-3">
                    <p>Calificacion: </p>
                </div>
            </div>
        </div>
    )
}
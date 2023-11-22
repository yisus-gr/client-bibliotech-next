"use client"

import {useRouter} from "next/navigation"

export default function Page () {
    const router = useRouter()
    const onSubmitHandler = async (e) => {
        const url = 'http://localhost:4000/api/libros'
        e.preventDefault()
        //console.log(e)
        const ISBN = e.target.isbn.value
        const titulo = e.target.titulo.value
        const autor = e.target.autor.value
        const year = e.target.year.value
        const editorial = e.target.editorial.value 
        const portada_url = e.target.imgURL.value 
        const sinopsis = e.target.sinopsis.value
        const categoria_id = e.target.sinopsis.value 

        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ISBN, titulo, autor, year, portada_url, editorial, sinopsis, categoria_id }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        router.push("/libros")
    }
    return(
        <div className="grids">
            <h1>Subida de libros</h1>
            <form onSubmit={onSubmitHandler} style={{width: "80%"}} className="g-start-2">
                <label htmlFor="isbn" className="form-label">ISBN</label>
                <input type="text" className="form-control" id="isbn"/>
                <label htmlFor="titulo" className="form-label">Titulo</label>
                <input type="text" className="form-control" id="titulo"/>
                <label htmlFor="autor" className="form-label">Autor</label>
                <input type="text" className="form-control" id="autor"/>
                <label htmlFor="editorial" className="form-label">Editorial</label>
                <input type="text" className="form-control" id="editorial"/>
                <label htmlFor="year" className="form-label">Año de publicacion</label>
                <input type="number" className="form-control" id="year"/>
                <label htmlFor="imgURL" className="form-label">Link de la imagen de la portada</label>
                <input type="text" className="form-control" id="imgURL"/>
                <label htmlFor="categoria">Categoria ID</label>
                <input type="number" id="categoria" className="form-control"/>
                <label htmlFor="sinopsis" className="form-label">Sinopsis</label>
                <textarea type="text" className="form-control" id="sinopsis"/>
                <hr />
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}
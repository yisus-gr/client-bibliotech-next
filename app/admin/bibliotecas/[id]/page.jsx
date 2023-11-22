"use client"

import { useRouter } from "next/navigation"

async function getBiblioteca(id){
    const url = `http://localhost:4000/api/bibliotecas/${id}`
    const res = await fetch(url, {cache: "no-cache"})
    const data = await res.json()
    return data
}




export default async function  Page ({params}) {
    const router = useRouter()
    const dataBiblioteca = await getBiblioteca(params.id)
    
    const onSubmitHandler = async (e) => {
        const url = 'http://localhost:4000/api/bibliotecas/inventario/'
        e.preventDefault()
        //console.log(e)
        const ID_BIBLIOTECA = params.id
        const ID_LIBRO = e.target.id_libro.value
        const EXISTENCIAS = e.target.existencias.value

        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ID_LIBRO, ID_BIBLIOTECA, EXISTENCIAS}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        alert("Enviado")
        router.push(`/admin/bibliotecas/${params.id}`)
    }


    return(
        <div>
            <h1>Agregar libros al inventario de {dataBiblioteca.NOMBRE}</h1>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="id_libro" className="form-label">ID de Libro</label>
                <input type="number" className="form-control" id="id_libro"/> 
                <label htmlFor="existencias">Existencias</label>
                <input type="number" className="form-control" id="existencias"/><hr />  
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}
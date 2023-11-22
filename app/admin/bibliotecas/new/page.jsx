"use client"

import {useRouter} from "next/navigation"

export default function Page () {
    const router = useRouter()
    const onSubmitHandler = async (e) => {
        const url = 'http://localhost:4000/api/bibliotecas'
        e.preventDefault()
        //console.log(e)
        const NOMBRE = e.target.nombre.value
        const CP = e.target.cp.value
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify({NOMBRE, CP}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        router.push("/bibliotecas")
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre"/>
                <label htmlFor="cp">Codigo Postal</label>
                <input type="number" className="form-control" id="cp"/> <hr />
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}
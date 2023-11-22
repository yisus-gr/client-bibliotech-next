export default function BibliotecaCard({biblioteca}) {
    const href = `/bibliotecas/${biblioteca.ID}`
    return(
        <a href={href}>
            <div className="card mt-1 p-2" style={{justifyContent: "space-between"}}>
                <h4 className="card-title">{biblioteca.NOMBRE}</h4>
                <i>{biblioteca.CP}</i>
            </div>
        </a>
    )
}
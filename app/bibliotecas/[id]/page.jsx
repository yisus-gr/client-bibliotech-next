import LibroCard from "@/components/LibroCard"


async function getBiblioteca(id){
    const url = `http://localhost:4000/api/bibliotecas/${id}`
    const res = await fetch(url, {cache: "no-cache"})
    const data = await res.json()
    return data
}

async function getInventario(id) {
    //hace una consulta para obtener cada libro y lo agrega al arreglo de libros que se retorna
    const url = `http://localhost:4000/api/libros/inventario/biblioteca/${id}`
    const res = await fetch(url, {cache: "no-cache"})
    
    const data = await res.json()

    const librosPromises = data.map(async (dato) => {
        const urlLibro = `http://localhost:4000/api/libros/${dato.ID_LIBRO}`;
        const reslibro = await fetch(urlLibro, { cache: "no-cache" });
        return reslibro.json();
    });
    
    // Esperar a que todas las promesas se completen usando Promise.all
    const libros = await Promise.all(librosPromises);
    return libros
}

export default async function Page ({params}) {
    const dataBiblioteca = await getBiblioteca(params.id)
    const dataInventario = await getInventario(params.id)
    return(
        <div>
            <div className="row">
                <div className="col-md-9 col-sm-12">
                    <h1>Libros disponibles en {dataBiblioteca.NOMBRE}</h1>
                    
                </div>
                <div className="col-md-3 col-sm-12">
                    <h2><i>{dataBiblioteca.CP}</i></h2>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-1" >
            { dataInventario ? (dataInventario.map(libro  => {
                //console.log(libro.ISBN)
                return(
                  <LibroCard key={libro.ID} libro={libro}/>
                )
                //<LibroCard key={libro.ISBN} libro={libro}/> 
            })) : (<h1>Hola</h1>)}
        </div>  

            
        </div>
        
    )
}
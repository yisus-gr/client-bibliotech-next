import LibroCard from "@/components/LibroCard"


async function getData() {
    const url = 'http://localhost:4000/api/libros'
    const res = await fetch(url, {cache: "no-cache"})
    const data = res.json()
    
    return data
}


async function Libros () {
    const data = await getData()
    //console.log(data)
    return(
        <div className="row row-cols-1 row-cols-md-2 g-4" style={{justifyContent: "center"}}>
            { data ? (data.map(libro  => {
                //console.log(libro.ISBN)
                return(
                    <LibroCard key={libro.ID} libro={libro}/>
                )
                //<LibroCard key={libro.ISBN} libro={libro}/> 
            })) : (<h1>Hola</h1>)}
        </div>        
    )
}


export default Libros
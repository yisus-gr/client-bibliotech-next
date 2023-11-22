import BibliotecaCard from "@/components/BibliotecaCard"

async function getBibliotecas () {
    const url = 'http://localhost:4000/api/bibliotecas/'
    const res = await fetch(url, {cache: "no-cache"})
    const data = await res.json()
    return data
}

async function Page() {
    const data = await getBibliotecas()

    return (
        
        <div>
            {data ? data.map(biblioteca => {
                  return(
                    <BibliotecaCard key={biblioteca.ID} biblioteca={biblioteca} />
                 )
                
            }) : <h1>No data found</h1>}
        </div>
    )

}

export default Page
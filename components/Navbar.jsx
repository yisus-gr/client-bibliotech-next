import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="navegacion">
          <h1>
            <Link href="/">Bibliotech</Link>
          </h1>
          <ul>
            <li><Link href="/libros">Libros</Link></li>
            <li><Link href="/bibliotecas">Bibliotecas</Link></li>
            <li><Link href="/perfil">Perfil</Link></li>
          </ul>
        </nav>
    )
}
import NavBar from "../components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css"


export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <NavBar/>
        <div className="container">
          {children}
        </div>
        </body>
    </html>
  )
}
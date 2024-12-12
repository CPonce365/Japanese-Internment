import { Link } from "react-router-dom"
import "../components/Header.css"

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="logo">Japanese-Internment</a>

      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/pearlharbor">PearlHarbor</Link>
        <Link to="/distinguish">Distinguish</Link>
        <Link to="/camp">Camp</Link>
      </nav>
    </div>
  )
}

export default Header
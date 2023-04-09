import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {

  return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" href="#">Ecommerce Matias Serres</Link>

                    <CartWidget />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className={({isActive}) => isActive ? 'nav-link active':'nav-link'} aria-current="page">Inicio</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to='/category/Relojes' className="dropdown-item">Relojes</Link></li>
                                    <li><Link to='/category/Celulares' className="dropdown-item">Celulares</Link></li>
                                    <li><Link to='/category/Bolsos' className="dropdown-item">Bolsos</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
            </div>
        </nav>

  )
}

export default NavBar
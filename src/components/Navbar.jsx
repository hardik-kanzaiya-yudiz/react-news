import React, { Component } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to={'/'} exact='true' className="nav-link mx-2"> Home  </Link>
                                </li>
                                <li className="nav-item"><Link exact='true' className="nav-link" to={'/business'}>Business </Link></li>
                                <li className="nav-item"><Link exact='true' className="nav-link" to={`/entertainment`}>Entertainment </Link></li>
                                <li className="nav-item"><Link exact='true' className="nav-link" to={`/general`}>General </Link></li>
                                <li className="nav-item"><Link exact='true' className="nav-link" to={`/health`}>Health </Link></li>
                                <li className="nav-item"><Link exact='true' className="nav-link" to={`/science`}>Science </Link></li>
                                <li className="nav-item"><Link exact='true' className="nav-link" to={`/sports`}>Sports </Link></li>
                                <li className="nav-item"><Link exact='true' className="nav-link" to={`/technology`}>Technology </Link></li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

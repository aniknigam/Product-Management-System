import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-danger">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to={"/"} class="nav-link active navbar-brand" aria-current="page" href="#">Product Management System</Link>
                            </li>

                            <li class="nav-item">
                                <Link to={"/"} class="nav-link active navbar-brand" aria-current="page" href="#">Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link to={"addProduct"} class="nav-link active" aria-current="page" href="#">Add Product</Link>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

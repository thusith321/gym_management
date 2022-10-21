import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './Header'
import "./style.css"


export default function SideNav() {

    return (
        <div >
            <Navbar style={{top:'64px'}} variant="dark" bg="dark" expand="lg" className='sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg'>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                
                <Container fluid>
                    <Navbar.Collapse id="navbar-dark-example">
                        <div className="navbar-collapse row m-auto ">
                            <div className="navbar-nav col-md-10">
                               <Link to="/dash-view" className="nav-item dash-link nav-link active bg-secondary"> Dashboard</Link>
                                <Link to="/" className="nav-item dash-link nav-link"> Add Client</Link>
                               
                                <Link to="/add" className="nav-item nav-link dash-link"> Add Equipement </Link>
                                
                                <Link to="/addt" className="nav-item nav-link dash-link"> Add Trainer </Link>

                                <Link to="/cal" className="nav-item nav-link dash-link"> Price calculator </Link>

                                <Link to="" className="nav-item nav-link dash-link"> Settings </Link>
                               
                            </div>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container-fluid p-0">
                <div className="row">
                    <Header />
                </div>
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-7">
                        <br />
                        <h1 className="fredoka"> Hello Admin ! </h1>
                    </div>
                    <div className="col-md-2 " >
                        <br />


                    </div>

                    <div className="row gx-0">

                    </div>


                </div>
            </div>

        </div>
    )
}
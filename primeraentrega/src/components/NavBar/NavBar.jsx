import { CartWidget } from "../CartWidget/CartWidget"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink to='/'>React-Bootstrap</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink  className={({ isActive}) => isActive ? 'btn btn-success' : 'btn btn-dark'} to='/categoria/remeras'>Cortadores</NavLink>
                            <NavLink  className={({ isActive}) => isActive ? 'btn btn-success' : 'btn btn-dark'} to='/categoria/gorras'>Variados</NavLink>
                        </Nav>

                        <Nav>
                            
                            <Link to='/cart'>🛒</Link>
                       
                        <CartWidget />
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
export default NavBar
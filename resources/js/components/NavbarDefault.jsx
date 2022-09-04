import { Link } from '@inertiajs/inertia-react';
import React from 'react'
// import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsBoxArrowRight, BsEmojiSmile } from "react-icons/bs";

function NavbarDefault() {
	return (
		<>
			<Navbar className="bg-dark bg-gradient p-1 at-navbar-open" expand="lg" variant="dark">
				<Container fluid>
					<Navbar.Toggle />
					<Navbar.Collapse>
						<Nav className="m-auto">

							<Nav.Link>
								<Link href='/'>
									Home
								</Link>
							</Nav.Link>
						</Nav>
						<div className="d-flex flex-row align-items-center ps-1 pe-1">
							<div className="d-flex align-items-center justify-content-center p-1 rounded-circle me-2 bg-secondary bg-gradient">
								{/* <BsEmojiSmile size={25} /> */}
								{'' ? (
									<BsEmojiSmile size={25} />
								) : (
									null
									// <img
									//   src={`${rdx_user.user?.foto}`}
									//   alt="..."
									//   style={{
									//     width: "35px",
									//     height: "35px",
									//     borderRadius: "50%",
									//     border: "2px solid #5a5a5a",
									//     backgroundPosition: "center",
									//     backgroundRepeat: "no-repeat",
									//   }}
									// />
								)}
							</div>
							<Nav>
								<NavDropdown
									align={"end"}
									title={'' ?? "teste"}
									className="user-drop"
									id="basic-nav-dropdown"
								>
									<NavDropdown.Item onClick={() => { }}>
										<BsBoxArrowRight size={17} className="me-2" /> Sair </NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>

		</>
	);
}

export default NavbarDefault;
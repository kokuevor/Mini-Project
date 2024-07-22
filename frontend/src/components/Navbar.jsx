import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Navbar.css';

export function NavbarComponent() {
	return (
		<Navbar className="navbar" data-bs-theme="dark" sticky="top">
			<Container>
				<Navbar.Brand href="#">LOGO</Navbar.Brand>
				<Nav className="d-flex">
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#contact">Contact</Nav.Link>
				</Nav>
				<Form className="d-flex">
					<Button href="/get-started" variant="primary"><b>Get Started</b></Button>
				</Form>
			</Container>
		</Navbar>
	);
}

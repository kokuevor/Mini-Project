import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Contact</h5>
                        <p>Email: example@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <p><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                        <p><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></p>
                        <p><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p className="mt-3">&copy; {new Date().getFullYear()}
                            <span className="logo-name-text"> Study</span>
                            <span className="logo-name-text-1">Paddies</span>. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}


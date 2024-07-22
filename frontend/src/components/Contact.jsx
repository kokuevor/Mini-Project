import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Contact.css";

export function ContactFormComponent() {
    return (
        <main id='contact' className="about-section-t-midbar">
            <div className="about-section-bg">
                <div className="contact-header">Leave Us a Message</div>
                <div className="form">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={5} placeholder="Type your message..." />
                        </Form.Group>
                        <Button href="#" variant="primary"><b>Submit</b></Button>
                    </Form>
                </div>
            </div>
        </main>
    );
}
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="main-container common-margin">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <span className="title-color">What’s Next?</span>
                    <h2>Get In Touch</h2>
                    <p>If you like my works then feel free to contact me. I am always ready to provide you better service with my programming and technical knowledge.</p>
                    <Form action="https://formcarry.com/s/oGBqmZS9Spy" method="POST" accept-charset="UTF-8" className="shadow p-3">
                        <Row id="contact-form" className="my-4">
                            <Col>
                               <input name="name" type="text" placeholder="Name" className="form-control"/>
                            </Col>
                            <Col>
                                <input name="email" type="text" placeholder="Email"  className="form-control"/>
                            </Col>
                        </Row>
                        <textarea name="message" className="w-100 mb-3" placeholder="Write to me" id="" cols="30" rows="8"></textarea>
                        <button type="submit">Send mail</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
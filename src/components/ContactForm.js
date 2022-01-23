import React, { useState } from "react";
import { Col, Form, InputGroup, Alert, Button } from 'react-bootstrap';
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const [contactSuccess, changeContactSuccess] = useState(false);
    const [contactLoading, changeContactLoading] = useState(false);
    const [contactError, changeContactError] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
      changeContactLoading(true);
      changeContactSuccess(false);
      changeContactError(false);
      emailjs
        .sendForm(
          "amazon_ses",
          "template_31x4cnf",
          e.target,
          "user_uB4PopJwbqrSoyPz8LPXg"
        )
        .then(
          (result) => {
            changeContactSuccess(true);
          },
          (error) => {
            changeContactError(true);
            changeContactLoading(false);
          }
        );
    };
  
  
    return (
        <div className="segment white">
        <Form onSubmit={sendEmail} className="contact-form">
              <Form.Row>
                <Form.Group
                  as={Col}
                  sm="12"
                  lg="6"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    id="from_name"
                    name="from_name"
                    type="text"
                    placeholder="John Smith"
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} sm="12" lg="6" controlId="user_name">
                  <Form.Label>Email Address</Form.Label>

                  <InputGroup>
                    <Form.Control
                      id="reply_to"
                      name="reply_to"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} sm="12" lg="6" controlId="user_number">
                  <Form.Label>Contact Number</Form.Label>

                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">+44</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      name="contact_number"
                      id="contact_number"
                      type="tel"
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group
                  as={Col}
                  sm="12"
                  lg="6"
                  controlId="user_name_hdyhau"
                >
                  <Form.Label>Choose Syndicate</Form.Label>
                  <Form.Control as="select" name="syndicate" id="syndicate">
                    <option>None</option>
                    <option>Apollo One</option>
                    <option>Makarios</option>
                    <option>Levendi</option>
                    <option>Lethal Force / Boonga Roogeta</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group
                  as={Col}
                  sm="12"
                  lg="6"
                  controlId="user_name_hdyhau"
                >
                  <Form.Label>How did you hear about us?</Form.Label>
                  <Form.Control as="select" name="channel" id="channel">
                    <option value="Friend / Family Member">
                      Friend / Family Member
                    </option>
                    <option>Web Search</option>
                    <option>Social Media</option>
                    <option>Online (Other)</option>
                    <option>Client Referral</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="12" controlId="user_number">
                  <Form.Label>Additional Information</Form.Label>

                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      id="message_html"
                      name="message_html"
                      type="text"
                      rows="5"
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group controlId="exampleForm.Button">
                  <Button type="submit" className="pcracing-button">Send Message</Button>
                </Form.Group>
              </Form.Row>
              {contactError && (
                <Alert variant="danger">
                  <Alert.Heading>Uh oh...</Alert.Heading>
                  <p>
                    There has been an error - try again later or give us a call
                  </p>
                </Alert>
              )}
              {contactSuccess && (
                <Alert variant="success">
                  <Alert.Heading>Contact form successful, your message has been sent.</Alert.Heading>
                  <p>
                    Thanks for contacting pcracing.co.uk, we will respond to you as
                    soon as we can.
                  </p>
                </Alert>
              )}
            </Form>
        </div>
    );
  };

export default ContactForm;

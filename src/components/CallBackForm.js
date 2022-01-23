import React, { useState } from "react";
import { Form, Button, Col, InputGroup, Alert, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

export const CallBackForm = ({ handleClose }) => {
  const { register, errors } = useForm();

  const [contactFormSuccess, changeContactFormSuccess] = useState(false);
  const [contactFormLoading, changeContactFormLoading] = useState(false);
  const [contactFormError, changeContactFormError] = useState(false);

  const sendEmail = e => {
    e.preventDefault();
    changeContactFormLoading(true);
    changeContactFormSuccess(false);
    changeContactFormError(false);

    emailjs
      .sendForm(
        "amazon_ses",
        "template_a0wnjc9",
        e.target,
        "user_uB4PopJwbqrSoyPz8LPXg"
      )
      .then(
        (result) => {
          console.log(result.text);
          changeContactFormSuccess(true);
        },
        (error) => {
          console.log(error.text);
          changeContactFormError(true);
          changeContactFormLoading(false);
        }
      );
  }

  return (
    <div>
      <div className="segment white">
        <Form onSubmit={sendEmail}>
          <Modal.Header closeButton>
            <Modal.Title>Request a callback</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {contactFormError && (
              <Alert variant="danger">
                <Alert.Heading>Uh oh...</Alert.Heading>
                <p>
                  There has been an error - try again later or give us a call{" "}
                  <a href="tel:+448002289800">here</a>.
                </p>
              </Alert>
            )}
            {contactFormSuccess && (
              <Alert variant="success">
                <Alert.Heading>Success</Alert.Heading>
                <p>
                  Thank you for contacting pcracing.co.uk we will
                  call you as soon as possible.
                </p>
              </Alert>
            )}

            {!contactFormSuccess && (
              <>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      id="from_name"
                      name="from_name"
                      type="text"
                      placeholder="John Smith"
                      required
                      ref={register({
                        required: "Name Required",
                        pattern: {
                          value: /^[A-Za-z\s']+$/,
                          message: "invalid name",
                        },
                      })}
                    />
                    <div className="errors">
                      {errors.full_name && errors.full_name.message}
                    </div>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="12" controlId="user_number">
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
                        ref={register({
                          required: "Phone Number Required",
                          pattern: {
                            value: /^[\d]{9,12}$/i,
                            message: "invalid telephone number",
                          },
                        })}
                      />
                    </InputGroup>
                    <div className="errors">
                      {errors.telephone && errors.telephone.message}
                    </div>
                  </Form.Group>
                </Form.Row>
              </>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {!contactFormSuccess && (
              <Button type="submit" className="pcracing-button" disabled={contactFormLoading}>
                <i className="fa fa-paper-plane"></i> Submit
              </Button>
            )}
          </Modal.Footer>
        </Form>
      </div>
    </div>
  );
};

export default CallBackForm;

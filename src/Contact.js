import React from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Components/about.css"

function Contact() {
  const [labelColor, setLabelColor] = useState('black');

  const handleLabelClick = () => {
    setLabelColor('orangered');
  };
  return (
    <>
        <Container className="container1about">
        <h1>
          Contact <span>Us</span> here
        </h1>
        <p>
          <a href="/" className="taglogo">
            Zonel<span>.</span>
            <sup>v2.0</sup>
          </a>
          Welcome to OurCompany, where we are committed to providing exceptional
          products and services to our customers.
        </p>
        <p>
          OurCompany was founded in 20XX and has since grown to become a leading
          provider in the industry. Over the years, we have achieved several
          milestones that have shaped our success.
        </p>
      </Container>
      <br />
      <br />
      <Container>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label  style={{ color: labelColor }}>
              Email
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" style={{ color: labelColor }}
              onClick={handleLabelClick} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label  style={{ color: labelColor }}>
              Password
            </Form.Label>
            <Form.Control type="password" placeholder="Password" style={{ color: labelColor }}
              onClick={handleLabelClick} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label  style={{ color: labelColor }}>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" style={{ color: labelColor }}
              onClick={handleLabelClick}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label  style={{ color: labelColor }}>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" style={{ color: labelColor }}
              onClick={handleLabelClick}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label  style={{ color: labelColor }}>City</Form.Label>
          <Form.Control style={{ color: labelColor }}
              onClick={handleLabelClick}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label  style={{ color: labelColor }}>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option style={{ color: labelColor }}
              onClick={handleLabelClick}>Choose...</option>
            <option style={{ color: labelColor }}
              onClick={handleLabelClick}>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label  style={{ color: labelColor }}>Zip</Form.Label>
          <Form.Control style={{ color: labelColor }}
              onClick={handleLabelClick}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" style={{ color: labelColor }}
              onClick={handleLabelClick} />
      </Form.Group>


        <Button className="bg-black text-white border-black" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    <br />
    <br />
    </>
  );
}

export default Contact;

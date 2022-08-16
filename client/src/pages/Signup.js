import React from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import bot from '../assets/bot.jpeg'
import "./Signup.css";
export default function Signup() {
  return (
    <Container>
      <Row>
        <Col
          md={7}
          className={
            "d-flex align-items-center justify-content-center flex-direction-column"
          }
        >
          <Form style={{ width: "80%", maxWidth: 500 }}>
              <h1 className={'text-center'}>Create Account</h1>
              <div className={'signup-profile-pic__container'}>
                  <img src={bot} alt="" className={'signup-profile-pic'}/>
              </div>
            <Form.Group className="mb-3 " controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={5} className={"signup__bg"}></Col>
      </Row>
    </Container>
  );
}

import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import './MessageForm.css'
export default function MessageForm() {
  function messageHandler(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className={"messages-output"}></div>

      <Form action="" onSubmit={messageHandler}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control
                type={"tex"}
                placeholder={"Your Message"}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", backgroundColor: "orange" }}
            >
              <i className={"fas fa-paper-plane"}></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

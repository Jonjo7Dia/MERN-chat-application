import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import {useSelector} from 'react-redux';
import './MessageForm.css'
export default function MessageForm() {
  function messageHandler(e) {
    e.preventDefault();
  }
  const user = useSelector((state) => state.user)
  return (
    <>
      <div className={"messages-output"}>
        {!user && 
        <div className={'alert alert-danger'}> Please Login</div>
          }
      </div>

      <Form action="" onSubmit={messageHandler}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control
                type={"tex"}
                placeholder={"Your Message"}
                disabled={!user}
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

import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Field, Form as FormikForm } from 'formik';
import PropTypes from 'prop-types';

const View = ({ handleSubmit }) => (
  <FormikForm>
    <Row className="justify-content-center">
      <Col className="mx-auto" xs={4}>
        <Form onSubmit={handleSubmit} style={{ marginTop: '50%' }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Field name="password" type="password" className="form-control" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </FormikForm>
);

View.propTypes = {};

export default View;

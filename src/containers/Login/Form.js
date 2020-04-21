import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Field from 'components/Form/Field';
import PropTypes from 'prop-types';

const View = ({ handleSubmit }) => (
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
        <Field
          name="password"
          type="password"
          label="Password"
          className="form-control"
        />
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  </Row>
);

View.propTypes = {};

export default View;

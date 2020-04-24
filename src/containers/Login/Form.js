import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Field from 'components/Form/Field';
import PropTypes from 'prop-types';

const View = ({ handleSubmit }) => (
  <Row className="justify-content-center">
    <Col className="mx-auto" xs={4}>
      <Form onSubmit={handleSubmit} style={{ marginTop: '50%' }}>
        <Form.Group controlId="formBasicEmail">
          <Field name="email" type="email" label="Email" />
        </Form.Group>
        <Field name="password" type="password" label="Password" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  </Row>
);

View.propTypes = {
  handleSubmit: PropTypes.func,
};

export default View;

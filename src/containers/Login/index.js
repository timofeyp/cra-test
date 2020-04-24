import React from 'react';
import { Formik } from 'formik';
import Form from 'containers/Login/Form';
import PropTypes from 'prop-types';

const View = props => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={values => console.log(values)}
  >
    {formikProps => <Form {...formikProps} />}
  </Formik>
);

View.propTypes = {};

export default View;

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

export const CustomForm = () => (
  <div>
    <h1 className="text-center font-bold text-green-700">Login</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
          <div className="w-full  flex justify-center">
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
        First Name
      </label>
          <Field name="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Harsh" />
          {errors.firstName && touched.firstName ? (
              <p className="text-red-500 text-xs italic">{errors.firstName}</p>
        
          ) : null}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
        Last Name
      </label>
          <Field name="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Tyagi" />
          {errors.lastName && touched.lastName ? (
              <p className="text-red-500 text-xs italic">{errors.lastName}</p>
        
          ) : null}

        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
          <Field name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="harshtyagimdr@gmail.com" />
          {errors.email && touched.email ? (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
        
          ) : null}
        
          <button type="submit" className=" mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Submit</button>
        </Form>
        </div>
      )}
    </Formik>
  </div>
);
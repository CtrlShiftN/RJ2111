import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// rules
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    // type = email, required
    email: Yup.string().email('Invalid email').required('Required'),
});

export const ValidationSchemaExample = () => (
    <div>
        <h1>Signup</h1>
        <Formik
            // khoi tao gia tri ban dau, giong nhu state
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            // validate
            validationSchema={SignupSchema}
            // xu ly su kien khi nhan submit
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >


            {({ errors, touched }) => (
                // khoi tao form
                <Form>
                    // truong du lieu
                    <Field name="firstName" />
                    // thong bao loi neu nhu xuat hien loi
                    {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                    ) : null}

                    <Field name="lastName" />
                    {errors.lastName && touched.lastName ? (
                        <div>{errors.lastName}</div>
                    ) : null}
                    <Field name="email" type="email" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <button type="submit">Submit</button>
                </Form>)}
        </Formik>
    </div>
);



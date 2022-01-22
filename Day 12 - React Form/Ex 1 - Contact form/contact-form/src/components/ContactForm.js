import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const ContactForm = () => {
    const attrSchema = Yup.object().shape({
        name: Yup.string().min(2).max(100).required('Required'),
        email: Yup.string().email('Invalid Email').required('Required'),
        phone: Yup.string().min(10).max(11).required('Required'),
        message: Yup.string().min(5).max(100)
    })
    let [form, setForm] = useState({});

    return (
        <div>
            <Formik
                initialValues={form}
                validationSchema={attrSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <h3>Name</h3>
                        <Field name="name" />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <h3>Email</h3>
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                        <h3>Phone</h3>
                        <Field name="phone" />
                        {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                        ) : null}
                        <h3>Message</h3>
                        <Field name="message" />
                        {errors.message && touched.message ? (
                            <div>{errors.message}</div>
                        ) : null}
                        <button type="submit">Submit</button>
                    </Form>)}
            </Formik>
        </div>
    )
}
export default ContactForm;
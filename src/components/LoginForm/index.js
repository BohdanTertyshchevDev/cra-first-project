import React, { Component } from 'react';
import { SCHEMA } from '../../schemas';
import { Formik, Form, Field, ErrorMessage } from 'formik';



const initialState = {
            email: "",
            pass: "",
            firstName: "",
            lastName: ""
}


function SignUpForm (props) { 
    const handleSubmitToFormik = (values, actions) => {
        actions.resetForm();
    }
    
        return (
            <Formik 
            initialValues={initialState} 
            onSubmit={handleSubmitToFormik}
            validationSchema={SCHEMA}
            >
                {
                    (formikProps) => {
                        return (
                            <Form >
                                <Field name="firstName" placeholder="firstName"/>
                                <ErrorMessage name="firstName" component="p"/>
                                <Field name="lastName" placeholder="lastName"/>
                                <ErrorMessage name="lastName" component="p"/>
                                <Field name="email" placeholder="email"/>
                                <ErrorMessage name="email" component="p"/>
                                <Field name="pass" placeholder="pass"/>
                                <ErrorMessage name='pass' component="p"/>
                                <input type='submit' value="submit" />
                            </Form>
                        );
                    }
                }
            </Formik>
        );
    
}

export default SignUpForm;

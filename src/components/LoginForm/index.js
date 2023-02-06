import React, { Component } from 'react';
import { SCHEMA } from '../../schemas';
import { Formik, Form, Field } from 'formik';



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
            <Formik initialValues={initialState} onSubmit={handleSubmitToFormik}>
                {
                    (formikProps) => {
                        return (
                            <Form >
                                <Field name="firstName" placeholder="firstName"/>
                                <Field name="lastName" placeholder="lastName"/>
                                <Field name="email" placeholder="email"/>
                                <Field name="pass" placeholder="pass"/>
                                <input type='submit' value="submit" />
                            </Form>
                        );
                    }
                }
            </Formik>
        );
    
}

export default SignUpForm;

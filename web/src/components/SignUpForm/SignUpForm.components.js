import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';

function SignUp (){
  return(
    <Formik
initialValues={{ firstname: '', lastname: '', email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email requis';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Adresse email invalide';
        }
        if (!values.password) {
            errors.password = 'Mot de passe requis';
          } else if (
            !/^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(^[a-zA-Z0-9@$=!:.#%]+$)/g.test(values.password)
          ) {
            errors.password = 'Mot de passe invalide';
          }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) =>(
<Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicFirstName">
    <Form.Label>Nom</Form.Label>
    <Form.Control type="firstname" name="firstname" placeholder="Nom" onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstname}/>
            {errors.firstname && touched.firstname && errors.firstname}
  </Form.Group>

  <Form.Group controlId="formBasicLastName">
    <Form.Label>Prénom</Form.Label>
    <Form.Control type="lastname" name="lastname" placeholder="Prénom" onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastname}/>
            {errors.lastname && touched.lastname && errors.lastname}
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur}
            value={values.email}/>
            {errors.email && touched.email && errors.email}
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Mot de passe</Form.Label>
    <Form.Control type="password" name="password" placeholder=" Mot de passe" onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}/>
            {errors.password && touched.password && errors.password}
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" disabled={isSubmitting}>
    Soumettre
  </Button>
</Form> 
)
      }
    </Formik>
  )


}

export default SignUp
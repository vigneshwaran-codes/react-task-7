import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Container, Button } from 'react-bootstrap'

// Validation
const LoginSchema = Yup.object().shape({
  email: Yup.string('Enter your email').email('Enter a valid email').required('Email is required your email'),
  password: Yup.string('Enter your password').min(8, 'Your password should contains 8+ characters').required('Password is required')
})

function Login () {
  const history = useHistory()
  return (
    <Formik
      initialValues={
      {
        email: '',
        password: ''
      }
    }
      validationSchema={LoginSchema}
      onSubmit={
      values => {
        console.log(values)
        history.push('/home')
      }
    }
    >
      {
  formikProps => {
    const { values, errors, touched } = formikProps
    return (
      <Container className='login_form'>
        <h1>Welcome back!</h1>
        <Form>
          <label className='p-2'>Email</label>
          <br />
          <Field
            className='p-2'
            name='email'
            type='email'
            value={values.email}
            placeholder='example@mail.com'
          />
          {errors.email && touched.email ? <div className='errorStyles'>{errors.email}</div> : null}
          <br />
          <label className='p-2'>Password</label>
          <br />
          <Field
            className='p-2'
            name='password'
            type='password'
            value={values.password}
            placeholder='8+ characters'
          />
          {errors.password && touched.password ? <div className='errorStyles'>{errors.password}</div> : null}
          <br />
          <p className='forgotPass_link p-2' onClick={() => history.push('/forgot-password')}>forget your email or password</p>
          <Button className='btn' type='submit'>Login</Button>
        </Form>
        <p className='p-2'>Don't have an account? <button className='register_link' onClick={() => history.push('/sign-up')}>Register</button></p>
      </Container>

    )
  }
}
    </Formik>

  )
}

export default Login

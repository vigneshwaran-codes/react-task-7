import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Container, Col, Row, Button } from 'react-bootstrap'

// Validation
const SignUpSchema = Yup.object().shape({
  firstName: Yup.string('Enter your firstName').required(
    'firstName is required '
  ),
  lastName: Yup.string('Enter your lastName').required('LastName is required'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(8, 'Your password should contains 8+ characters')
    .required('Password is required')
})

function SignUp () {
  const history = useHistory()

  return (
    <div className='register_form'>
      <Container>
        <Row>
          <Col>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: ''
              }}
              validationSchema={SignUpSchema}
              onSubmit={(values) => {
                console.log(values)
                history.push('/login')
              }}
            >
              {(formikProps) => {
                const { values, errors, touched } = formikProps
                return (
                  <div>
                    <h1>Register</h1>
                    <div>
                      <Form>
                        <label className='p-2'>FirstName</label>
                        <br />
                        <Field
                          className='p-2'
                          value={values.firstName}
                          type='text'
                          name='firstName'
                          placeholder='FirstName'
                        />
                        {errors.firstName && touched.firstName
                          ? (
                            <div className='errorStyles'>{errors.firstName}</div>
                            )
                          : null}
                        <br />
                        <label className='p-2'>LastName</label>
                        <br />
                        <Field
                          className='p-2'
                          value={values.lastName}
                          type='text'
                          name='lastName'
                          placeholder='LastName'
                        />
                        {errors.lastName && touched.lastName
                          ? (
                            <div className='errorStyles'>{errors.lastName}</div>
                            )
                          : null}
                        <br />
                        <label className='p-2'>Email</label>
                        <br />
                        <Field
                          className='p-2'
                          name='email'
                          type='email'
                          value={values.email}
                          placeholder='example@mail.com'
                        />
                        {errors.email && touched.email
                          ? (
                            <div className='errorStyles'>{errors.email}</div>
                            )
                          : null}
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
                        {errors.password && touched.password
                          ? (
                            <div className='errorStyles'>{errors.password}</div>
                            )
                          : null}
                        <br />
                        <Button className='btn' type='submit'>Register</Button>
                      </Form>
                      <p className='p-2'>
                        Already got an account?{' '}
                        <button
                          className='login_link'
                          onClick={() => history.push('/login')}
                        >
                          Log in
                        </button>
                      </p>
                    </div>
                    <p>
                      By creating your account you agree with our <br />
                      <Link to='details' onClick={() => history.push('/details')}>
                        Terms of service and privacy policy
                      </Link>
                    </p>
                  </div>
                )
              }}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignUp

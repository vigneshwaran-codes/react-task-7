import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import HomePic from '../assets/home.svg'

function Welcome () {
  const history = useHistory()
  return (
    <div className='welcome'>
      <img src={HomePic} alt='home_pic' className='home-pic' />
      <Container>
        <Row>
          <Col className='home'>
            <div className='home_btn'>
              <button
                onClick={() => history.push('/login')}
                className='home_btn_1'
              >
                Login
              </button>{' '}
              <button
                onClick={() => history.push('/sign-up')}
                className='home_btn_2'
              >
                Register
              </button>
            </div>
            <br />
            <h5 className='media_txt'>Log in or Register with: </h5>
            <div className='media_links'>
              <a href='https://www.facebook.com' target='_blank' rel='noreferrer'><i className='fa-brands fa-facebook' /></a>
              <a href='https://www.apple.com' target='_blank' rel='noreferrer'><i className='fa-brands fa-apple' /></a>
              <a href='https://www.google.com' target='_blank' rel='noreferrer'><i className='fa-brands fa-google' /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Welcome

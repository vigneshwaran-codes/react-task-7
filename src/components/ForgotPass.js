import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function ForgotPass () {
  const history = useHistory()
  const [forgotPass, setForgotPass] = useState('')
  const handleSubmit = (e) => {
    console.log(e.target.value)
    history.push('/forgot-password/verify')
  }
  return (
    <div>
      <i className='fas fa-home home_icon' onClick={() => history.push('/')} />
      <hr />
      <h3 className='p-2'>Recover your password</h3>
      <label className='p-2'>
        Enter your email address
      </label>
      <input
        className='p-2 m-2'
        name='email'
        type='email'
        value={forgotPass}
        onChange={(e) => setForgotPass(e.target.value)}
        placeholder='example@mail.com'
      />
      <p className='p-2'> A code will be sent to your email address</p>
      <Button className='btn' onClick={handleSubmit}>Send code</Button>
    </div>
  )
}

export default ForgotPass

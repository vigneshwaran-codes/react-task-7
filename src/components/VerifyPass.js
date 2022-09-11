import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function VerifyPass () {
  const history = useHistory()
  const [verifyPass, setVerifyPass] = useState('')
  const handleSubmit = (e) => {
    console.log(e.target.value)
    history.push('/login')
  }
  return (
    <div className='mt-3'>
      <h3 className='p-2'>Recover your password</h3>
      <label className='p-2'>
        Enter your the code
      </label>
      <input className='p-2 m-2' type='number' value={verifyPass} onChange={(e) => setVerifyPass(e.target.value)} />
      <div className='verify_btns'>
        <Button className='btn' onClick={handleSubmit}>Submit</Button>
        <br />
        <Button className='btn' onClick={() => history.push('/forgot-password')}>Resend code</Button>
      </div>
    </div>
  )
}

export default VerifyPass

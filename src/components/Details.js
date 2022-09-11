import React from 'react'
import { useHistory } from 'react-router-dom'

function Details () {
  const history = useHistory()
  return (
    <div>
      <button onClick={() => history.goBack()}><i className='fas fa-arrow-left' /></button>
      <h1>Details</h1>
    </div>
  )
}

export default Details

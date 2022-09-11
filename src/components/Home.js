import React from 'react'
import { useHistory } from 'react-router-dom';

function Home () {
  const history = useHistory()
  return (
    <div>
      <h1 className='m-2'>Home</h1>
      <button onClick={() => history.push('/login')} className='btn'>Log Out</button>
    </div>
  )
}

export default Home

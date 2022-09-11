import React from 'react'
import ErrorPic from '../assets/error.svg'

function PageNotFound () {
  return (
    <div>
      <img src={ErrorPic} alt='PageNotFound' className='error_img' />
    </div>
  )
}

export default PageNotFound

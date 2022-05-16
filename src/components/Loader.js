import React from 'react'
import firebob from './firebob.gif'

function Loader() {
  return (
    <div className='loader'>
      <img src={firebob} alt='Loading...' />
      <h1 className='loading-text'>Loading...</h1>


    </div>
  )   
}

export default Loader


import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
 <div className='header-back'>
     <div className='header'>
      <div className='container'>
        <div className='navbar'>
          <span><Link to={'/'}>Home</Link></span>
          <span><Link to={'/products'}>Products</Link></span>
        </div>
      </div>
    </div>
 </div>
  )
}


export {Header}
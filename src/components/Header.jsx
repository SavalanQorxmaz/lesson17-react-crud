

import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context'

const Header = () => {
// const [counter, setCounter] = useState(0)

  const {countFavorites} = useContext(MainContext)
  // useEffect(()=>{
  //   addMethods({counter, setCounter})
  // },[])


  return (
 <div className='header-back'>
     <div className='header'>
      <div className='container'>
        <div className='navbar'>
          <span><Link to={'/'}>Home</Link></span>
          <span><Link to={'/products'}>Products</Link></span>
          <span>{countFavorites}</span>
        </div>
      </div>
    </div>
 </div>
  )
}


export {Header}
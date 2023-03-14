

import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context'
import IconButton from '@mui/material/IconButton';
import { Favorite } from '@mui/icons-material';

const Header = () => {


  const {countFavorites} = useContext(MainContext)
 


  return (
 <div className='header-back'>
     <div className='header'>
      <div className='container'>
        <div className='navbar'>
          <span><Link to={'/'}>Home</Link></span>
          <span><Link to={'/products'}>Products</Link></span>
          <IconButton style={{color: 'yellow',position: 'relative'}}   aria-label="share">
          <Favorite />
          <span style={{position: 'absolute', top: '-3px',right: '-3px', color: 'green'}}>{countFavorites}</span>
        </IconButton>
         
        </div>
      </div>
    </div>
 </div>
  )
}


export {Header}
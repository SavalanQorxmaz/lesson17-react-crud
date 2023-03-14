import {Routes, Route} from 'react-router-dom'
import {MainContext} from './context'
import { useContext, useEffect, useState } from 'react'
import {Home} from './pages/Home'
import {Products} from './pages/Products'
import { Product } from './pages/Product'
import {Header} from './components/Header'

 localStorage.setItem('favoritesId', localStorage.getItem('favoritesId'))
  
  

function App() {

const [countFavorites, setCountFavorites] = useState(0)
const [idArray, setIdArray] = useState([])
const [methods, setMethods] = useState({})

const addMethods = (newMethods)=>{
  setMethods({
    ...methods,
    ...newMethods
  })
}

const allStates ={
  countFavorites,
  setCountFavorites,
  idArray,
  setIdArray,
  addMethods,
  ...methods
}

useEffect(()=>{
  setCountFavorites(localStorage.getItem('favoritesId').split(',').length-1)
},[])

  return (
<MainContext.Provider value={allStates}>
<div className="App">
        <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/products' element = {<Products/>}/>
        <Route path='/product/:id' element = {<Product/>}/>
       
      </Routes>
 
    </div>
    </MainContext.Provider>
  );
}

export default App;

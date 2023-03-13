import {Routes, Route} from 'react-router-dom'
import {MainContext} from './context'
import { useContext, useState } from 'react'
import {Home} from './pages/Home'
import {Products} from './pages/Products'
import { Product } from './pages/Product'
import {Header} from './components/Header'
function App() {

const [countFavorites, setCountFavorites] = useState(0)
const [favoritesIds, setFavoritesIds] = useState([])
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
  favoritesIds,
  setFavoritesIds,
  addMethods,
  ...methods
}

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

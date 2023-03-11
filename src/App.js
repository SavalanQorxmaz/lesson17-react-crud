import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Products} from './pages/Products'
import { Product } from './pages/Product'
import {Header} from './components/Header'
function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/products' element = {<Products/>}/>
        <Route path='/product/:id' element = {<Product/>}/>
       
      </Routes>
 
    </div>
  );
}

export default App;

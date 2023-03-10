import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Products} from './pages/Products'
import {Header} from './components/Header'
function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/products' element = {<Products/>}/>
       
      </Routes>
 
    </div>
  );
}

export default App;

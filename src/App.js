import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Sign from './pages/Sign' 
import Services from './pages/Services';
import Products from './pages/Products'
function App() {
  return (
    <Router>
      <Header/>
      <div >
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/sign-up' element={<Sign/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;

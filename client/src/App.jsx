import './App.css'
import {Routes,Route} from 'react-router-dom'
import Auth from './page/Auth/Auth'
import Home from './page/Home/Home'
import Reg from './page/Reg/Reg'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element ={<Auth/>}></Route>
        <Route path='/reg' element ={<Reg/>}></Route>
        <Route path='/home' element ={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App

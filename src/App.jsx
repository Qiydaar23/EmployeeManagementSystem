import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {


  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<ListEmployeeComponent/>}/>
        <Route path='/employees' element={<ListEmployeeComponent/>}/>
        <Route path='/employees' element={<ListEmployeeComponent/>}/>
        <Route path='/add-employees' element={<EmployeeComponent/>}/>
        <Route/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

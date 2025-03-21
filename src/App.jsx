import { useState } from 'react'

import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ListEmployeeComponent />
      <Footer/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import VendorPage from './VendorPage'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar width={"100%"}/>
      <VendorPage/>
    </>
  )
}

export default App

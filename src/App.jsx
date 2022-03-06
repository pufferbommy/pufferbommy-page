import React from 'react'
import { ThemeContextProvider } from './context/ThemeContext'
import Home from './pages/Home'

const App = () => {
  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  )
}

export default App

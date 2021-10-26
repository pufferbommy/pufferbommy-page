import React from 'react'
import Home from './pages/Home'
import useTheme from './components/useTheme'

const App = () => {
    const [nextTheme, setTheme] = useTheme()
    return (
        <div className="duration-200 bg-white dark:bg-gray-900 overflow-hidden">
            <Home nextTheme={nextTheme} setTheme={setTheme}></Home>
        </div>
    )
}

export default App

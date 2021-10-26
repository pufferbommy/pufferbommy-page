import React, { useEffect } from 'react'
import Home from './pages/Home'
import useTheme from './components/useTheme'

const App = () => {
    const [nextTheme, setTheme] = useTheme()

    // set default theme is dark
    useEffect(() => {
        if (localStorage.theme === 'undefined') {
            setTheme('dark')
        }
    }, [])

    return (
        <div className="duration-200 bg-white dark:bg-gray-900 overflow-hidden">
            <Home nextTheme={nextTheme} setTheme={setTheme}></Home>
        </div>
    )
}

export default App

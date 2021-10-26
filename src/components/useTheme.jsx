import { useState, useEffect } from 'react'
const useTheme = () => {
    localStorage.theme === 'undefined'
        ? localStorage.setItem('theme', 'dark')
        : ''
    const [theme, setTheme] = useState(localStorage.theme)
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    useEffect(() => {
        const rootElem = window.document.documentElement
        rootElem.classList.remove(nextTheme)
        rootElem.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme, nextTheme])

    return [nextTheme, setTheme]
}

export default useTheme

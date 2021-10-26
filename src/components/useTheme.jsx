import { useState, useEffect } from 'react'
const useTheme = () => {
    const defualtTheme = 'dark'
    const [theme, setTheme] = useState((localStorage.theme = defualtTheme))
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

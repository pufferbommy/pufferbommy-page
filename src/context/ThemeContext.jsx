import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(localStorage.getItem('isDarkTheme')),
  )

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  useEffect(() => {
    if (isDarkTheme === null) {
      setIsDarkTheme(true)
      localStorage.setItem('isDarkTheme', JSON.stringify(true))
    }
    if (isDarkTheme) {
      document.documentElement.className = 'dark'
    } else {
      document.documentElement.className = 'light'
    }
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme))
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

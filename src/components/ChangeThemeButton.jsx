import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { RiSunLine, RiMoonFill } from 'react-icons/ri'
import { motion, AnimatePresence } from 'framer-motion'

const ChangeThemeButton = () => {
  const { isDarkTheme, changeTheme } = useContext(ThemeContext)
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        key={isDarkTheme ? 'dark' : 'light'}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={changeTheme}
        className="text-white dark:text-black p-3 flex justify-center items-center bg-purple-400 dark:bg-yellow-300 transition-all rounded-md cursor-pointer select-none"
      >
        {isDarkTheme ? <RiSunLine /> : <RiMoonFill />}
      </motion.div>
    </AnimatePresence>
  )
}

export default ChangeThemeButton

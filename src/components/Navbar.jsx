import HamburgerMenu from './HamburgerMenu'
import ChangeThemeButton from './ChangeThemeButton'

const Navbar = () => {
  return (
    <nav className="z-50 fixed top-0 bg-white border-b border-gray-300 dark:border-none dark:bg-gray-800 backdrop-blur-md dark:bg-opacity-50 bg-opacity-25 w-full p-3 md:p-2">
      <div className="flex max-w-2xl mx-auto items-center  justify-center xs:justify-between">
        <h1 className="dark:text-white text-black text-xl font-semibold cursor-pointer">
          Pufferbommy
        </h1>
        <div className="flex gap-2">
          <ChangeThemeButton />
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

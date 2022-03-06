const HamburgerMenu = () => {
  return (
    <div className="border p-3 rounded-md duration-300 border-gray-400 drak:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer block md:hidden">
      <div className="border-b-2 rounded border-gray-600 dark:border-gray-200 w-4" />
      <div className="border-b-2 my-1 rounded border-gray-600 dark:border-gray-200 w-4" />
      <div className="border-b-2 rounded border-gray-600 dark:border-gray-200 w-4" />
    </div>
  )
}

export default HamburgerMenu

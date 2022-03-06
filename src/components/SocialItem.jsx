const SocialItem = ({ destination, icon, name }) => {
  return (
    <a
      href={destination}
      target="_blank"
      rel="noreferrer"
      className="underline-gap group flex items-center gap-2 cursor-pointer px-8 py-2 duration-300 hover:bg-opacity-50 w-max dark:hover:bg-opacity-25 hover:bg-green-300 dark:hover:bg-green-800 hover:underline rounded-md text-black dark:text-white leading-6 tracking-wider text-sm"
    >
      {icon}
      <span className="group-hover:text-blue-600 dark:group-hover:text-blue-300 text-blue-400">
        {name}
      </span>
    </a>
  )
}

export default SocialItem

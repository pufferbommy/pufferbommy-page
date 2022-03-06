import React from 'react'

const TopicHeading = ({ title }) => {
  return (
    <h1 className="text-black dark:text-white w-max border-b-4 border-gray-500 text-xl font-bold">
      {title}
    </h1>
  )
}

export default TopicHeading

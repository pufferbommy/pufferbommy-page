import { RiGithubFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri'
import SocialItem from './SocialItem'
import TopicHeading from './TopicHeading'
import { useState, lazy } from 'react'
import Cat from '../images/cat.png'

const Content = () => {
  const [isRotate, setIsRotate] = useState(false)
  const handleClick = () => {
    setIsRotate(!isRotate)
  }
  return (
    <main className="mt-16 flex flex-col gap-8 px-4 sm:px-0 md:gap-6 max-w-md md:max-w-lg mx-auto">
      <div className="my-4">
        <img
          onClick={handleClick}
          className={`${
            isRotate
              ? 'animate-spin'
              : 'hover:scale-105 transition duration-300'
          } w-1/2 mx-auto cursor-pointer`}
          alt="Cat"
          src={Cat}
          draggable="false"
        />
      </div>
      <div className="bg-gray-200 dark:bg-gray-800 rounded-lg py-4 px-10">
        <h2 className="font-medium text-black dark:text-white text-center">
          Hello, I'm a newbie developer based in Thailand!
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-black text-2xl mt-4 text-center xs:text-left font-bold dark:text-white">
          Panyawat Kaedpol
        </h2>
        <p className="text-black ml-0 sm:ml-4 text-center xs:text-left dark:text-white">
          I'm {new Date().getFullYear() - 2001} years old and you can call me
          Bomb.
        </p>
      </div>
      <div name="bio" className="flex flex-col gap-2">
        <TopicHeading title="Bio" />
        <div className="text-black dark:text-white leading-6 tracking-wider ml-0 sm:ml-4 text-sm mt-2">
          <span className="flex flex-col xs:flex-row xs:gap-4">
            <h1 className="font-semibold">2001</h1>
            <p>Born in Yala, Thailand.</p>
          </span>
          <span className="flex flex-col my-4 xs:my-0 xs:flex-row xs:gap-4">
            <h1 className="font-semibold">2004</h1>
            <p>Moved to Phatthalung, Thailand.</p>
          </span>
          <span className="flex flex-col xs:flex-row xs:gap-4">
            <h1 className="font-semibold">2022</h1>
            <p>I'm currenly in my third year studying computer science.</p>
          </span>
        </div>
      </div>
      <div name="skills" className="flex flex-col gap-2">
        <TopicHeading title="Skills" />
        <div className="text-black dark:text-white leading-6 ml-0 sm:ml-4 tracking-wider text-sm mt-2">
          <div className="hidden xs:block">
            <h1 className="font-semibold inline">Languages: </h1>
            <span className="capitalize">Javascript, html, css, java, c++</span>
          </div>
          <div className="block xs:hidden">
            <h1 className="font-semibold inline">Languages</h1>
            <ul className="list-disc capitalize ml-4">
              <li>Javascript</li>
              <li>html</li>
              <li>css</li>
              <li>java</li>
              <li>c++</li>
            </ul>
          </div>
          <div className="hidden xs:block">
            <h1 className="font-semibold inline">Libraries & Frameworks: </h1>
            <span className="capitalize">React, express, tailwind</span>
          </div>
          <div className="block xs:hidden my-4">
            <h1 className="font-semibold inline">Libraries & Frameworks</h1>
            <ul className="list-disc ml-4">
              <li>React</li>
              <li>Express</li>
              <li>Tailwind</li>
            </ul>
          </div>
          <div className="hidden xs:block">
            <h1 className="font-semibold inline">Tools: </h1>
            <span className="capitalize">
              Vscode, git & github, command line, adobe photoshop, figma
            </span>
          </div>
          <div className="block xs:hidden">
            <h1 className="font-semibold inline">Tools</h1>
            <ul className="list-disc capitalize ml-4">
              <li>Vscode</li>
              <li>git & github</li>
              <li>command line</li>
              <li>adobe photoshop</li>
              <li>figma</li>
            </ul>
          </div>
        </div>
      </div>
      <div name="iLove" className="flex flex-col gap-2">
        <TopicHeading title="I ???" />
        <p className="text-black hidden xs:block ml-0 sm:ml-4 dark:text-white leading-6 tracking-wider capitalize text-sm mt-2">
          Coding, music, art, singing, learning, travelling
        </p>
        <div className="block xs:hidden">
          <ul className="list-disc capitalize ml-4 text-black dark:text-white leading-6">
            <li>Coding</li>
            <li>music</li>
            <li>art</li>
            <li>singing</li>
            <li>learning</li>
            <li>travelling</li>
          </ul>
        </div>
      </div>
      <div name="onTheWeb" className="flex flex-col gap-2">
        <TopicHeading title="On the web" />
        <div>
          <SocialItem
            icon={<RiGithubFill size="1.25rem" />}
            destination="https://github.com/pufferbommy"
            name="@pufferbommy"
          />
          <SocialItem
            icon={<RiTwitterFill size="1.25rem" />}
            destination="https://twitter.com/pufferbommy"
            name="@pufferbommy"
          />
          <SocialItem
            icon={<RiInstagramFill size="1.25rem" />}
            destination="https://www.instagram.com/pufferbommy"
            name="@pufferbommy"
          />
        </div>
      </div>
    </main>
  )
}

export default Content

import Link from 'next/link';
import React, { useState } from 'react';
import {
  FaFacebook,
  FaGithub,
  FaRegMoon,
  FaSun,
  FaTwitter,
} from 'react-icons/fa';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const ThemeChanger = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    if (theme === 'light') {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className='py-6 md:py-12 px-3 shadow-sm dark:bg-gray-900 '>
      <div className=' container mx-auto grid grid-cols-12 max-w-6xl grid-flow-row-dense place-items-center'>
        {/* logo section */}
        <div className='flex flex-col gap-0 col-span-6 md:col-span-3'>
          <h1 className='text-lg lg:text-2xl  text-gray-900 dark:text-white font-bold'>
            Tanimur Rahman
          </h1>
          <p className='text-sm text-gray-500 '>Full stack developer </p>
        </div>
        {/* logo section */}

        {/* nav link */}
        <div className='flex space-x-3 md:space-x-4 lg:space-x-5 col-span-12 md:col-span-6 text-lg md:text-xl text-gray-700 dark:text-white font-semibold mt-3 '>
          <Link href='/'>
            <a className='hover:text-green-400 transition'>Home</a>
          </Link>
          <Link href='/about'>
            <a className='hover:text-green-400 transition'>About</a>
          </Link>
          <Link href='/projects'>
            <a className='hover:text-green-400 transition'>Projects</a>
          </Link>
          <Link href='/contact'>
            <a className='hover:text-green-400 transition'>Contact</a>
          </Link>
        </div>
        {/* nav link */}

        {/* social icon and link */}
        <div className='flex space-x-4 col-span-6 md:col-span-3 text-2xl justify-center items-center mt-3'>
          <Link href='https://m.facebook.com/profile.php?ref=bookmarks'>
            <a className='hover:text-green-400 transition'>
              <FaFacebook />
            </a>
          </Link>
          <Link href='https://twitter.com/MTanimur'>
            <a className='hover:text-green-400 transition'>
              <FaTwitter />
            </a>
          </Link>
          <Link href='https://github.com/MushfiqurRahmanTanim'>
            <a className='hover:text-green-400 transition'>
              <FaGithub />
            </a>
          </Link>
          <button
            onClick={ThemeChanger}
            className='focus:outline-none text-yellow-600'
          >
            {!isLoading ? <FaRegMoon /> : <FaSun />}
          </button>
        </div>
        {/* social icon and link */}
      </div>
    </div>
  );
};

export default Navbar;

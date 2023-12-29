'use client';

import { usePathname } from 'next/navigation';
import LinkItem from './link';
import SocialIcon, { SocialIconType } from './social.icon';

export default function Navigation() {

  const pathName = usePathname();

  function isSelected(href: string) {
    return href === pathName;
  }

  return (
  <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ben Hilger</span>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div className='mr-3'>
          <SocialIcon 
            type={ SocialIconType.Github }
          />
        </div>
     
        <SocialIcon 
          type={ SocialIconType.LinkedIn }
        />
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <LinkItem href="/" isSelected={ isSelected("/") } label="Home"/>
          </li>
          <li>
            <LinkItem target="_blank" href="https://dev.to/benhilger" isSelected={ false } label="Blog" />
          </li>
          <li>
            <LinkItem target="_blank" href="https://github.com/Ben-Hilger/LeetCode" isSelected={ false } label="LeetCode" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

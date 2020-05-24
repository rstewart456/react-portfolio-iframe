import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiMenu, mdiCloseCircle } from '@mdi/js';
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);

  const Location = useLocation()

  const res = Location.pathname

  const locat = res.includes("/livedemo/")

  const updateWidth = () => {
    setwidth(window.innerWidth);
  };



  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    if (width < 1024) {
      setisOpen(true);
    }
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  const isMenu = () => {
    setisOpen(!isOpen);
  };

  if (!locat) {
  return (
    <div>
      <div className='fixed text-white p-2 h-12 w-full bg-black lg:flex items-center lg:justify-between z-50'>
        <div className='flex justify-between items-center'>
          <div>Ronald Portfolio</div>
          {isOpen ? (
            <button className='lg:hidden' onClick={isMenu}>
              <Icon path={mdiMenu} title='menuIcon' size={1} />
            </button>
          ) : (
            <button className='lg:hidden' onClick={isMenu}>
              <Icon path={mdiCloseCircle} title='closeIcon' size={1} />
            </button>
          )}
        </div>
        <div
          className={
            !isOpen
              ? 'block bg-black lg:flex lg:justify-between lg:items-center'
              : 'hidden lg:flex lg:justify-between lg:items-center'
          }
        >
          <Link
            to='/'
            onClick={() => setisOpen(!isOpen)}
            className='block p-3 text-white bg-black hover:text-indigo-600'
          >
            Home
          </Link>
          <Link
            to='/projects'
            onClick={() => setisOpen(!isOpen)}
            className='block p-3 text-white bg-black hover:text-indigo-600'
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
  } else {
    return null
  }
};


export default Nav
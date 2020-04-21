import React from 'react'
import Icon from '@mdi/react'
import { mdiEmail, mdiLinkedin, mdiGithub } from '@mdi/js';
import codeimage from '../assets/image/coding-bg.png';
import theman from '../assets/image/aman.jpg'


export const Home = () => {

    return (
      <div
        className='h-screen pt-12'
        style={{ backgroundImage: `url(${codeimage}) ` }}
      >
        <div className='w-screen h-screen md:h-full lg:w-1/2 opacity-75 bg-black float-right flex-row justify-center items-center'>
          <div className='flex justify-center items-center'>
            <img
              className='h-48 w-48 lg:hidden rounded-full border-orange-900 border-4'
              src={theman}
              alt='theman'
            />
          </div>
          <div className='p-4 lg:pt-24 lg:pb-12 lg:px-12 text-3xl lg:text-5xl'>
            My name is <b>Ronald</b> and I'm a web Developer
          </div>
          <p className='lg:text-lg px-12'>
            I am passionate about technology and the web. I remember when Amazon
            first started out just selling books online and now Amazon is within
            the top 5 companies in the world. I also remember the battle of
            Microsoft Explorer and Netscape browser. I am excited to see what
            another twenty years will bring. <br />
            <br />I am also a nerd at heart. I love sci-fi, and anime. Some of
            my favorite shows are The Flash, The Expanse, Star Wars, Star Trek,
            Tenchi Muyo! War on Geminar, and The Rise of the Shield Hero.
          </p>
          <div className='text-2xl lg:text-3xl text-center py-4'>
            Contact Me
          </div>
          <div className='flex px-6 pb-12 lg:px-24 justify-between'>
            <a href='mailto:rstewart456@gmail.com'>
              <Icon path={mdiEmail} title='Email' size={3} />
            </a>
            <a href='mailto:rstewart456@gmail.com'>
              <Icon path={mdiLinkedin} title='Linkedin' size={3} />
            </a>
            <a href='mailto:rstewart456@gmail.com'>
              <Icon path={mdiGithub} title='Github' size={3} />
            </a>
          </div>
        </div>
      </div>
    );
}

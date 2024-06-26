import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import  {TwitterIcon, InstagramIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from './Icons';
import {motion} from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';
const CustomLink =({href , title , className=""})=>{
    const router =useRouter();
    
    return(
        <Link href={href}  className={`${className} relative  group`}>
            {title}

            <span className={`
            h-[1px] inline-block  bg-dark 
             absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath===href ? "w-full":"w-0"}
            dark:bg-light`}
        
        >
          &nbsp;
        </span>
            
        </Link>
    );
};

const CustomMobileLink =({href , title , className="",toggle})=>{
  const router =useRouter();
  const handleClick=()=>{
    toggle();   
    router.push(href)
  }
  
  return(
      <button href={href}  className={`${className} relative  group text-light dark:text-dark my-2`} onClick={handleClick}>
          {title}

          <span className={`
          h-[1px] inline-block  bg-light dark:bg-dark 
           absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath===href ? "w-full":"w-0"}
          dark:bg-light`}
      
      >
        &nbsp;
      </span>
          
      </button>
  );
};
// ...

const NavBar = () => {

  const[mode,setMode]=useThemeSwitcher();
  const[isOpen,setIsOpen]=useState(false);

  const handleClick =()=>{
    setIsOpen(!isOpen)
  }

    return (
      <header className='w-full px-32 py-8 font-medium flex item-center justify-between dark:text-light relative'>
        <button className='flex-col justify-center items-center hidden lg:flex'onClick={handleClick}>
          <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
          <span className={`bg-dark dark:bg-light block  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0':'opacity-100'}`}></span>
          <span className={`bg-dark dark:bg-light block  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
        </button>
       <div className="w-full flex justify-between items-center lg:hidden">
         <nav>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/about" title="About" className='mx-4' /> {/* Fix the typo here */}
          <CustomLink href="/projects" title="Projects" className='mx-4' />
          
        </nav>
  
        <nav className="flex items-centre justify-centre flex-wrap">
          <motion.a href="https://twitter.com/Abhishe00412090" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-6 mr-3"
          >
            <TwitterIcon />
            </motion.a>
          <motion.a href="https://github.com/Anuj8716" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-6 mx-3">
            <GithubIcon />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/abhishek-tripathi-624030133/" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-6 mx-3">
            <LinkedInIcon />
          </motion.a>
          <motion.a href="https://in.pinterest.com/tripathiabhishek925/" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}className="w-6 mx-3">
            <PinterestIcon />
          </motion.a>
          <motion.a href="https://www.instagram.com/abhishek0607__/" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-6 ml-3">
            < InstagramIcon/>
          </motion.a>
          <button 
          onClick={()=>  setMode(mode==="light" ? "dark":"light")}
          className={`ml-3 flex items-center justify-center rounded-full p-0
          ${mode==="light"?"bg-dark text-light":"bg-light text-dark"}
          `}
          >
      {
        mode==="dark"?
        <SunIcon className={"fill-dark"}/>
       : <MoonIcon className={"fill-dark"}/>
      }
          </button>
        </nav></div>
  
       {
        isOpen ?
        <motion.div
        initial={{scale:0,opacity:0 ,x:"-50%",y:"-50%"}}
        animate={{scale:1,opacity:1}}
        className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top top-1/2 left-1/2 -translate-x-1/2 -tranlate-y-1/2 
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
        ">
         <nav className="flex item-centre flex-col justify-centre">
          <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
          <CustomMobileLink href="/about" title="About" className='' toggle={handleClick}/> {/* Fix the typo here */}
          <CustomMobileLink href="/projects" title="Projects" className=''toggle={handleClick} />
          
        </nav>
  
        <nav className="flex items-centre justify-centre flex-wrap mt-2">
          <motion.a href="https://twitter.com/Abhishe00412090" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-6 mr-3 sm:mx-1"
          >
            <TwitterIcon />
            </motion.a>
          <motion.a href="https://github.com/Anuj8716" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-6 mx-3 bg-light dark:bg-dark rounded full sm:mx-1">
            <GithubIcon />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/abhishek-tripathi-624030133" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-6 mx-3 sm:mx-1 ">
            <LinkedInIcon />
          </motion.a>
          <motion.a href="https://in.pinterest.com/tripathiabhishek925/" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}className="w-6 mx-3 sm:mx-1">
            <PinterestIcon />
          </motion.a>
          <motion.a href="https://www.instagram.com/abhishek0607__/" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-6 ml-3 sm:mx-1">
            < InstagramIcon/>
          </motion.a>
          <button 
          onClick={()=>  setMode(mode==="light" ? "dark":"light")}
          className={`ml-3 flex items-center justify-center rounded-full p-0
          ${mode==="light"?"bg-dark text-light":"bg-light text-dark"}
          `}
          >
      {
        mode==="dark"?
        <SunIcon className={"fill-dark"}/>
       : <MoonIcon className={"fill-dark"}/>
      }
          </button>
        </nav></motion.div>

        :null
       }
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>
      </header>
    );
  };
  
  export default NavBar;
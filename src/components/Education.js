import React, { useRef } from 'react'
import {motion, spring, useScroll } from "framer-motion"
import LiIcon from './LiIcon'
const Details=({degree,NameofInstitute,Time,address,stream,details})=>{
    const ref=useRef(null);
    return(
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:spring}}
        >
            <h3 className='capitalize font-bold text-2xl'>
                {stream}&nbsp;<a className='text-dark capitalize dark:text-light'>@{NameofInstitute}</a>
                
            </h3>
            <p className='font-medium w-full text-left justify-centre'>{details}</p>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75' >
                { Time } | {address}
            </span>
            <p className='font-medium w-full  text-primary dark:text-primaryDark capitalize'>
                {degree}
            </p>
        </motion.div>
    </li>
    )
}
const Education = () => {
    const ref= useRef(null);
    const {scrollYProgress}=useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Education
        </h2>
      <div ref={ref}className='w-[75%] mx-auto relative'>
        <motion.div 
        style={{scaleY:scrollYProgress}}
        className='absolute left-14 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark'/>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
        <Details
            degree="10th" NameofInstitute="ARMY PUBLIC SCHOOL JAMMU CANTT."
            Time="April 2016- April 2017" address="J&K"
            Stream="Mathematics"
            details="I have successfully completed my 10th-grade education from the CBSE (Central Board of Secondary Education) board. "
            />
            <Details
            degree="10+2" NameofInstitute="STEPPING STONE INTER COLLEGE"
            Time="April 2018- April 2019" address="Gorakhpur"
            Stream="Mathematics"
            details="I have completed my 10+2 education from the ISC (Indian School Certificate) board with a focus on mathematics. "
            />
             <Details
            degree="Bachelor's of Technology"NameofInstitute="BABU BANARASI DAS NORTHERN INDIA INSTITUTE OF TECHNOLOGY"
            Time="Nov 2020- Aug 2024" address="Lucknow"
            Stream="Computer Science"
            details="Relevant courses included Data Structures and Algorithms, Computer Science Engineering, and Artificial 
            Intelligence"
            
            
            />
        </ul>
      </div>
    </div>
  )
}

export default Education
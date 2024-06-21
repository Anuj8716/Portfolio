import React, { useRef } from 'react'
import {motion, spring, useScroll } from "framer-motion"
import LiIcon from './LiIcon'
const Details=({Position,company,Time,address,work})=>{
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
                {Position}&nbsp;<a className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                { Time } | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
    )
}
const Experience = () => {
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
        Experience
        </h2>
      <div ref={ref}className='w-[75%] mx-auto relative'>
        <motion.div 
        style={{scaleY:scrollYProgress}}
        className='absolute left-14 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark'/>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
             <Details
            Position="Mern Stack intern" company=" NullClass"
            Time="June 2023- July 2023" address="Remote"
            work="Collaborated with a team of developers to design, implement, and maintain web applications using the
            MERN (MongoDB, Express, React, Node.js) stack.Developed responsive and user-friendly front-end components using React, ensuring seamless user
            experiences.
            "
            />
             <Details
            Position="Salesforce Developer" company=" SmartInternz"
            Time="March 2022- November 2022" address="Remote"
            work="Applied innovative approaches to application design through creative inception and planning. 
            Salesforce.com Development:Salesforce Training:Salesforce.comImplementation:SalesforceMarketing Cloud.
            "
            />
            <Details
            Position="Android Developer Intern" company=" Learn & Build"
            Time="July 2023- August 2023" address="Remote"
            work="Flutter/Dart: My proficiency in Flutter and Dart enables me to bring designs to life with smooth animations, 
            responsive layouts, and a native-like performance.
            Developed application using android studio.
            "
            />
            <Details
            Position="Java Developer Intern" company=" Learn & Build"
            Time="August 2023- November 2023" address="Remote"
            work="Engaged in hands-on projects during my internship,
             I've gained practical experience in [mention specific tasks or projects], honing my skills in real-world applications.
            "
            />
        </ul>
      </div>
    </div>
  )
}

export default Experience
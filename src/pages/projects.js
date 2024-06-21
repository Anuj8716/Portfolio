import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import Project2 from "../../public/images/projects/crypto-screener-cover-image.png"
import Project4 from "../../public/images/projects/portfolio-cover-image.jpg"
import Project7 from "../../public/images/projects/MachineLearning.jpg"
const FeaturedProject=({ type , title, summary, img , link , github})=>{
  return(
    <article className='w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid  border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12
    '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light/75
      rounded-br-3xl
      '/>
      <Link href={link} target="_blank"
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className="w-full h-auto"/>
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt-2 flex items-centre'>
        <Link href={github} target="_blank" className='w-10 bg-rounded '> <GithubIcon/> </Link>
        <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold'>Visit Project </Link>
        </div>
        
      </div>

    </article>
  )
}
const Project=({title,type,img,link,github,})=>{
  return(
        <article className='w-full flex flex-col items-centre justify-center rounded-2xl
        border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative
        '>
          <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light/75
      rounded-br-3xl
      '/>
         <Link href={link} target="_blank"
      className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className="w-full h-auto"/>
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>{title}</h2>
        </Link>
        
        <div className=' w-full mt-2 flex items-centre justify-between'>
        <Link href={link} target="_blank" className='text-lg underline font-semibold dark:text-light'>Visit</Link>
        <Link href={github} target="_blank" className='w-8 '> <GithubIcon/> </Link>
        
        </div>
        
      </div>
        </article>
  )
}
const projects = () => {
  return (
    <>
      <Head>
        <title>Abhishek Tripathi | Projects Page</title>
        <meta name="description" content="any description"/>
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16'>
        <AnimatedText text="Imagination Trumps Knowledge!"className='text-6xl mb-16'/>
          <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-12'>
              
            </div>
            <div className='col-span-6'>
              
            <Project
            title="Portfolio"
            img={Project4}
             
             link="/"
             github="/"
             type="Featured project"
            
            />
              
            </div>
            < div className='col-span-6'>
              <Project
              title="Youtube Clone"
              img={Project2}
              
               link="/"
               github="/"
               type="Featured project"
              
              />
              
              
            </div>
            < div className='col-span-6'>
              <Project
              title="Cardiovascular Disease Prediction Using Machine learning"
              img={Project7}
              
               link="/"
               github="/"
               type="Featured project"
              
              />
              
              
            </div>
            
           
          </div>

      </Layout>
    </main>
    </>
  )
}

export default projects
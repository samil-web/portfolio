import AnimatedText from '@/components/Animatedtext'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/profile.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'


const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })
    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>
                    About Page
                </title>
                <meta name='description' content='Describe'></meta>
            </Head>
            <main className='flex flex-col w-full items-center justify-center'>
                <Layout classname='pt-16'>
                    <AnimatedText text='Passion fuels Purpose!' classname='pb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl'></AnimatedText>
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 xl:flex xl:flex-col  md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='my-4 font-medium'>My name is Shamil</p>
                            <p className='font-medium'>I have high goals and my attitude to coding is what makes me special</p>
                            <p className='font-medium'>Programming is not just coding, it is skills like communicate, engineering and execution!</p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light 
                        xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark  md:col-span-8' />
                            <Image src={profilePic} alt="Shamil" className='w-full h-auto rounded-2xl' />
                        </div>
                        <div className='flex col-span-2 flex-col items-end justify-between p-8 xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className='text-lg font-medium text-dark/75 capitalize xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={40} />
                                    +</span>
                                <h2 className='text-lg font-medium text-dark/75 capitalize xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={4} />+</span>
                                <h2 className='text-right text-lg font-medium text-dark/75 capitalize xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                </Layout>
            </main>
        </>
    )
}

export default about
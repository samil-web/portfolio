import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import Twitter from '../../public/images/svgs/twitter.svg'

import LinkedIn from '../../public/images/svgs/linkedin.svg'

import Pinterest from '../../public/images/svgs/pinterest.svg'

import GithubIcon from '../../public/images/svgs/logo-github.svg'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter()
    console.log(router)
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={
                `h-[1px] inline-block bg-dark absolute 
                left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'}`
            }
            >&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
    const router = useRouter()
    console.log(router)
    const handleClick = () => {
        toggle()
        router.push(href)
    }
    return (
        <button onClick={handleClick} href={href} className={`${className} relative group text-light dark:text-dark my-2`}>
            {title}

            <span className={
                `h-[1px] inline-block bg-light absolute 
                left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`
            }
            >&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    // const [mode,setMode] = useTheme
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {

        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-16 font-medium flex items-center justify-between relative
        z-10 lg:px-16 md:px-12 sm:px-8'>
            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm -translate-y-2.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm -translate-y-2.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            {/*// ! Desktop layer*/}

            <div className='w-full flex justify-between items-center lg:hidden '>
                <nav>
                    <CustomLink href='/' title="Home" className='mr-4' />
                    <CustomLink href='/about' title="About" className='mx-4' />
                    <CustomLink href='/projects' title="Projects" className='mx-4' />

                </nav>


                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href='https://www.twitter.com/' target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={() => {
                            scale: 0.9
                        }}
                        className='w-6 mr-3'>
                        <Twitter />
                    </motion.a>
                    <motion.a href='https://www.linkedin.com/' target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={() => {
                            scale: 0.9
                        }}
                        className='w-6 mx-3'>
                        <LinkedIn />
                    </motion.a>
                    <motion.a href='https://www.pinterest.com/' target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={() => {
                            scale: 0.9
                        }}
                        className='w-6 ml-3'>
                        <Pinterest />
                    </motion.a>
                </nav>
            </div>
            <div className='absolute left-[50%]  translate-x-[50%]'>
                <Logo></Logo>
            </div>


            {/*// !Mobile layers*/}
            {isOpen ?
                <motion.div
                    initial={{
                        scale: 0,
                        opacity: 0,
                        x: '-50%',
                        y: '-50%'
                    }}
                    animate={{
                        scale: 1, opacity: 1
                    }}
                    className='min-w-[70vw] flex flex-col  justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/75 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomMobileLink href='/' title="Home" toggle={handleClick} />
                        <CustomMobileLink href='/about' title="About" toggle={handleClick} />
                        <CustomMobileLink href='/projects' title="Projects" toggle={handleClick} />

                    </nav>

                    <nav className='flex items-center justify-center flex-wrap mt-2'>
                        <motion.a href='https://twitter.com/AlieffShamil' target={'_blank'}
                            whileHover={{ y: -2 }}
                            whileTap={() => {
                                scale: 0.9
                            }}
                            className='w-6 mr-3 sm:mx-1'>
                            <Twitter />
                        </motion.a>
                        <motion.a href='https://www.github.com/samil-web' target={'_blank'}
                            whileHover={{ y: -2 }}
                            whileTap={() => {
                                scale: 0.9
                            }}
                            className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'>
                            <GithubIcon />
                        </motion.a>
                        <motion.a href='https://www.linkedin.com/in/samil-aliyev/' target={'_blank'}
                            whileHover={{ y: -2 }}
                            whileTap={() => {
                                scale: 0.9
                            }}
                            className='w-6 mx-3 sm:mx-1'>
                            <LinkedIn />
                        </motion.a>
                        <motion.a href='https://www.pinterest.com/' target={'_blank'}
                            whileHover={{ y: -2 }}
                            whileTap={() => {
                                scale: 0.9
                            }}
                            className='w-6 ml-3 sm:mx-1'>
                            <Pinterest />
                        </motion.a>
                    </nav>
                </motion.div>
                : null
            }
        </header>
    )
}

export default NavBar
import AnimatedText from '@/components/Animatedtext'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import GithubIcon from '../../public/images/svgs/logo-github.svg'
import project1 from "../../public/images/projects/InsTech.gif"
import project2 from "../../public/images/projects/Rick_Morty.gif"
import project3 from "../../public/images/projects/restaurant_website.gif"

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

    return (
        <article className='w-fit flex items-center justify-between
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 m-12 relative rounded-br-2xl
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link href={link} target={'_blank'}
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} className="w-full h-auto"></Image>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'>
                        <GithubIcon className="w-10 h-10"></GithubIcon>
                    </Link>
                    <Link href={link} target="_blank"
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-fit flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative mx-auto'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-2xl dark:bg-light md:-right-2  md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target={'_blank'}
                className="w-full cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} className="w-full h-auto"></Image>
            </Link>
            <div className='w-full flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl mt-4 dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl`'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center justify-between w-full'>
                    <Link href={link} target="_blank"
                        className='w-full rounded-lg text-lg font-semibold underline md:text-base'>
                        Visit Project
                    </Link>
                    <Link href={github} target="_blank" className='w-8'>
                        <GithubIcon className="w-8 md:w-6"></GithubIcon>
                    </Link>

                </div>
            </div>
        </article>
    )
}
const projects = () => {
    return (
        <>
            <Head>
                <title>Shamil</title>
                <meta name="description" content="Shamil's Portfolio" />

            </Head>
            <main className='flex items-center text-dark w-full min-h-screen'>
                <Layout>
                    <AnimatedText
                        text='Cool Projects'
                        classname='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Insurance platform"
                                img={project1}
                                summary="A platform that will bring close insurance brokers and people needing insurance"
                                link="https://fendteamwork.vercel.app/"
                                github="https://github.com/FrancescoMicunco/fendteamwork"
                                type="Web Application"
                            />
                        </div>
                        <div className='flex col-span-12 justify-between'>
                            <div className='col-span-6 sm:col-span-12'>
                                <Project
                                    title="Rick&Morty cartoon"
                                    img={project2}
                                    summary="Rick&Morty API application gathering all characters in cartoon"
                                    link="https://samil-web.github.io/Rick-Morty-Table/"
                                    github="https://github.com/samil-web/Rick-Morty-Table"
                                    type="Web Application"
                                />
                            </div>
                            <div className='col-span-6 sm:col-span-12'>
                                <Project
                                    title="Restaurant website"
                                    img={project3}
                                    summary="Restaurant website with booking system"
                                    link="https://graceful-cuchufli-b137a9.netlify.app/"
                                    github="/"
                                    type="Web Application"
                                />
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
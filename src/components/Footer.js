import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark px-8 mt-24 sm:text-base'>
            <Layout classname='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All rights reserved</span>
                <div className='flex items-center lg:py-4'>
                    Build with <span className='text-primary text-2xl px-1'>&#9825;</span>
                    <Link href="/" className='underline underline-offset-4'> by Shamil</Link>
                </div>

                <Link href="/">Shamil</Link>
            </Layout>
        </footer>
    )
}

export default Footer
import React from 'react'
import { Footer } from 'flowbite-react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'


const FooterComp = () => {
  return (
    <Footer container className='border border-t-8 border-gray-900 rounded-none '>
        <div className='w-full max-w-7xl mx-auto mb-20'>
            
            <Footer.Divider/>
            <div className='w-full flex flex-row items-center justify-between'>
                <Footer.Copyright href='#' by='Hafsa Dev' year={new Date().getFullYear()} className='text-md sm:text-lg'/>
                <div className='flex gap-6 mt-2 justify-center '>
                    <Footer.Icon href='https://www.github.com/hafsascript' icon={BsGithub}/>
                    <Footer.Icon href='#' icon={BsLinkedin}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}

export default FooterComp
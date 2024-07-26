import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { IoMdArrowDroprightCircle } from "react-icons/io";



const Projects = () => {
  return (
    <div className='py-36' id="projects">
        <h1 className='heading'>
            Project {' '}
            <span className='text-rose-300'>Display</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center
        p-4 gap-x-24 gap-y-14 mt-10'>
            {projects.map(({id,title,des,img,iconLists,link})=>(
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]
                flex items-center justify-center
                sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center
                        sm:w-[570px] w-[80vw] overflow-hidden sm:h-[45vh] h-[40vh] mb-10'>
                            <div className='relative w-full h-full
                            overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="/bg.png" alt="bg"/>
                            </div>
                            <img src={img} alt={title}
                            className='z-10 absolute bottom-0'/>
                        </div>
                        <h1 className='font-bold lg:text-2xl
                        md:text-xl text-base '>{title}</h1>
                        <p className='lg:text-lg lg:font-normal font-light text-sm line-clamp-2 mt-2'>{des}</p>
                        <div className='flex items-center justify-between
                        mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index)=>(
                                    <div key={icon} className='border
                                    border-white/[0.2] rounded-full bg-black md:h-10 md:w-10 h-8 w-8
                                    flex justify-center items-center'
                                    style={{
                                        transform: `translateX(-${5 * index * 2}px)`
                                    }}>
                                        <img src={icon} alt={icon} className='p-2 '/>
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                <a href={link} target='_blank' rel='noopener noreferrer'><p className='flex hover:underline lg:text-md text-sm text-red-300'>Check The Site </p></a>
                                <IoMdArrowDroprightCircle className='text-red-200'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
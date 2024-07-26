import { skills } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'




const Skills = () => {
  return (
    <div className='py-20' id='skills'>
        <h1 className='heading'>
            My {' '}
            <span className='text-yellow-300'>Skills</span>
        </h1>
        
        <div className='w-full mt-12 flex flex-wrap gap-8 sm:gap-24 justify-center sm:justify-between lg:justify-center p-4 sm:p-16 '>
            {skills.map((skill)=>(
                <Button key={skill.id}
                    duration={Math.floor(Math.random()* 5000)+ 5000}
                    borderRadius='1.75rem'
                    >
                    <div className='items-center justify-center  '>
                        <img src={skill.img} alt={skill.name} className='w-16 h-12  '/>
                    </div>
                </Button>
                ))}
        </div>
        
        
    </div>
  )
}

export default Skills
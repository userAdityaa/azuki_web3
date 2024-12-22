import React from 'react'
import Image from 'next/image'

const cards = [
  {
    'src': '/first_card.webp', 
    'header': 'ep.1 - The waiting man', 
    'desc': 'anthology series',
  }, 
  {
    'src': '/second_card.webp', 
    'header': 'sisters', 
    'desc': 'story animation',
  }
]

const StorySection = () => {
  return (
    <div className='text-black h-[75vh] bg-[#dd323f] pt-[0.5rem]'>
        <div className='bg-[#ebe7e0] w-full h-[98.5%]'>
              <div className='flex items-center justify-center gap-4 pt-[2rem]'>
                {cards.map((card, index) => (
                  <div 
                  key={index}
                  className='w-[25rem] h-[33rem] rounded-md bg-cover bg-center'
                  style={{ backgroundImage: `url(${card.src})` }}
                >
                  <div className='p-4 text-white'>
                    <h2 className='text-xl font-bold uppercase text-[12px]'>{card.header}</h2>
                    <p className='text-zinc-400 text-[10px] uppercase'>{card.desc}</p>
                  </div>
                </div>
                ))}
              </div>
        </div>
    </div>
  )
}

export default StorySection
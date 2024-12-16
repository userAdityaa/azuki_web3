import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='text-black fixed bottom-16 left-4 bg-white bg-opacity-10 w-[8rem] h-[4rem] rounded-xl'>
        <Image src = '/jax.webp' alt='jax' height={20} width={70} className='absolute -top-2 left-0'></Image>
    </div>
  )
}

export default Footer
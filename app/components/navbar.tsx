import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed py-8 w-full h-10 items-center px-3 flex justify-between' >
        <div className='flex items-center bg-[#c03540] p-4 w-[6.5%] justify-center rounded-lg'>
            <Image src = '/azuki_logo.svg' alt='azuki logo' height={10} width={100}></Image>
        </div>

        <div className='w-[40%] text-[14px] font-semibold text-white'>
            <ul className='uppercase flex items-center justify-between'>
                <li>About</li>
                <li>Beanz</li>
                <li>Lore</li>
                <li>More</li>
                <li>Socials</li>
                <li>Buy</li>
            </ul>
        </div>

        <div>
            <Button className='bg-transparent hover:bg-transparent border-none shadow-none'>Connect</Button>
        </div>
    </div>
  )
}

export default Navbar
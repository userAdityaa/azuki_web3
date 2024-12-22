import Image from "next/image";
import { Anta } from "next/font/google";
import { Poppins } from "next/font/google";
import StorySection from "./sections/StorySection";

const poppins = Poppins({
  subsets: ['latin'], 
  weight: '400',
});

const anta = Anta ({
  subsets: ['latin'], 
  weight: '400',
});

export default function Home() {
  return (
    <>
    <video autoPlay muted loop id="myVideo" className="h-[100vh]">
      <source src="azuki.mp4" type="video/mp4"/>
    </video>

    <div className={`absolute z-50 bottom-7 w-full flex items-center justify-center`}>
      <p className="text-white uppercase flex items-center font-bold text-[14px]">Scroll for more <Image src = '/arrow_down.svg' alt="arrow down" height={30} width={25}></Image></p>

      
    </div>

    <div className="bg-white h-[5rem] w-[30rem] absolute bottom-7 right-4 rounded-md flex items-center gap-32">
      <Image src = '/cta-home.webp' alt="cta home" height={30} width={110} className="absolute -top-12"></Image>
      <div className="flex flex-col justify-center gap-[0.10rem] ml-[8rem]">
        <p className="uppercase text-zinc-400 font-bold text-[12px]">Enter the garden</p>
        <p className="text-black uppercase text-[15px] font-bold">Episode 1</p>
      </div>
      <button className="uppercase bg-black text-white font-bold text-[16px] p-4">Watch</button>
    </div>
    <StorySection/>
    </>
  );
}

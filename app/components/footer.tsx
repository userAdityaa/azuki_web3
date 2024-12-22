'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Anta } from 'next/font/google';

const anta = Anta({
  subsets: ['latin'], 
  weight: '400',
});


const player = [
  {
    'audio': '/audio/Skrillex, PEEKABOO, Flowdan, & G-Rex - Badders (Official Audio).mp3', 
    'name': "Badders", 
    'singer': 'PEEKABOO, Flowdan, ...'
  }, 
  {
    'audio': '/audio/Freddie Dredd - Wrath (Official Video).mp3',
    'name': "wrath"
  }
];

const Footer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [width, setWidth] = useState('8rem');
  const [iconWidth, setIconWidth] = useState(70);
  const [topAdjust, setTopAdjust] = useState('0.5rem')
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [open, setOpen] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        setOpen(false);
        audioRef.current.pause();
        setWidth('8rem');
        setIconWidth(70);
        setTopAdjust('0.5rem');
      } else {
        setOpen(true);
        audioRef.current.play();
        setWidth('26rem');
        setIconWidth(100);
        setTopAdjust('2.2rem');
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true);
    }
  };

  return (
    <div className={`text-black fixed bottom-16 left-4 bg-white bg-opacity-10 w-[${width}] h-[4rem] rounded-xl transition-all duration-500 flex items-center justify-end`}>

      <button
        className="bg-white bg-opacity-10 rounded-full w-12 h-12 absolute -right-5 -top-5 flex items-center justify-center border-2 border-gray-400 border-opacity-10"
        onClick={handlePlay}
        aria-label="Play audio"
        tabIndex={0}
      >
        <Image
          src={isPlaying ? "/minus.svg" : hasInteracted ? "/plus.svg" : "/play_button.svg"}
          alt={isPlaying ? "Minus button" : hasInteracted ? "Plus button" : "Play button"}
          height={isPlaying || hasInteracted ? 15 : 20}
          width={isPlaying || hasInteracted ? 15 : 30}
        />
      </button>


      {open && 
      <div className='w-[18rem] flex items-center justify-center gap-2 mr-[1rem]'>
          <div className='min-w-14'>
            <p className={`text-zinc-100 uppercase ${anta.className}`}>{player[0].name}</p>
            <p className={`text-zinc-500 uppercase ${anta.className} text-[10px]`}>{player[0].singer}</p>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <Image src = '/prev_button.svg' alt='prev button' height={20} width={40}></Image>
            <Image src = '/pause_button.svg' alt='pause button' height={20} width={40}></Image>
            <Image src = '/next_button.svg' alt='next button' height={20} width={40}></Image>
          </div>
      </div>
      }
      

      <audio
        ref={audioRef}
        src="/audio/Skrillex, PEEKABOO, Flowdan, & G-Rex - Badders (Official Audio).mp3"
        preload="metadata"
        controls
        className="hidden" 
      />
      
      <Image
        src="/jax.webp"
        alt="Decorative artwork"
        height={20}
        width={iconWidth}
        className={`absolute -top-[${topAdjust}] left-0`}
      />
    </div>
  );
};

export default Footer;

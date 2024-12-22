'use client';
import React, { useRef } from 'react';
import Image from 'next/image';

const Footer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="text-black fixed bottom-16 left-4 bg-white bg-opacity-10 w-[8rem] h-[4rem] rounded-xl">

      <button
        className="bg-white bg-opacity-10 rounded-full w-12 h-12 absolute -right-5 -top-5 flex items-center justify-center border-2 border-gray-400 border-opacity-10"
        onClick={handlePlay}
        aria-label="Play audio"
        tabIndex={0}
      >
        <Image
          src="/play_button.svg"
          alt="Play button"
          height={20}
          width={30}
        />
      </button>
      

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
        width={70}
        className="absolute -top-2 left-0"
      />
    </div>
  );
};

export default Footer;

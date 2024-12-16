'use client'
import React from 'react';
import  Button  from './Button';
import   Container from './Container'
import { JackInTheBox, Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter, fadeInLeft, fadeInUp } from '../../keyframes';
import Image from 'next/image';

const Hero = () => {
  return (
    <Container className="flex flex-col sm:flex-row mt-20 mb-32">
    {/* Texte et contenu à gauche */}
    <div className="w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-[-10px] xs:mt-5 sm:mt-10">
      <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
          Create, Sell & Collect Your Own Creative NFT
        </h1>
      </Reveal>
      <Reveal keyframes={fadeInDownShorter} duration={1000} delay={800}>
        <p className="mb-8 text-sm xs:text-base sm:text-lg md:text-xl opacity-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.
        </p>
      </Reveal>
  
      <div className="flex flex-wrap gap-3 mb-10">
        <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
          <Button
            isLink
            href={'/#about'}
            className="mr-3 text-sm xs:text-base sm:text-lg"
            variant={'primary'}
          >
            Explore Now
          </Button>
        </Reveal>
        <Reveal keyframes={fadeInUp} duration={1000} delay={400}>
          <Button
            isLink
            href={'/#collections'}
            className="text-sm xs:text-base sm:text-lg"
          >
            Sell NFT
          </Button>
        </Reveal>
      </div>
  
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
        <Reveal keyframes={fadeInLeft} duration={500} delay={200}>
          <div className='text-center'>
            <p className="font-bold text-xl xs:text-2xl sm:text-3xl mb-1">37k+</p>
            <p className="opacity-50 text-xs xs:text-sm">Artworks</p>
          </div>
        </Reveal>
        <Reveal keyframes={fadeInLeft} duration={500} delay={400}>
          <div className='text-center'>
            <p className="font-bold text-xl xs:text-2xl sm:text-3xl mb-1">20k+</p>
            <p className="opacity-50 text-xs xs:text-sm">Artists</p>
          </div>
        </Reveal>
        <Reveal keyframes={fadeInLeft} duration={500} delay={600}>
          <div className='text-center'>
            <p className="font-bold text-xl xs:text-2xl sm:text-3xl mb-1">99k+</p>
            <p className="opacity-50 text-xs xs:text-sm">Auctions</p>
          </div>
        </Reveal>
      </div>
    </div>
  
    {/* Section Image à droite */}
    <div className="flex-1 mt-14 sm:mt-0">
      <JackInTheBox delay={200} triggerOnce>
        <div className="relative w-full h-[200px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition={'center'}
            src="/hero/iPhone 15 Pro.png"
            alt="hero"
            className="transform scale-100 xs:scale-90 sm:scale-95 md:scale-100"
          />
        </div>
      </JackInTheBox>
    </div>
  </Container>
  );
};

export default Hero;  
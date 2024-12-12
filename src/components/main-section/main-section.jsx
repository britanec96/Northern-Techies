import React, { useEffect } from 'react';
import { BlockHomeFirst } from '../block-home-first';
import { Wrapper } from '../wrapper';
import BlockHomeThird from '../block-home-third';
import useScrollReveal from '../SCROLL-REVEAL/ScrollReveal';
import BlockHomeSecond from '../block-home-second';
import TestimonialCarousel from '../carousel';

export const MainSection = () => {

  useScrollReveal([
    { selector: '.element-delay-200', delay: 200, options: { distance: '50px' } },
    { selector: '.element-delay-400', delay: 400, options: { distance: '60px' } },
    { selector: '.element-delay-800', delay: 800, options: { distance: '70px' } },
    { selector: '.element-delay-1200', delay: 1200, options: { distance: '70px' } },
    { selector: '.element-delay-1400', delay: 1400, options: { distance: '70px' } },
  ]);

  return (
    <>
<div className="relative w-full overflow-hidden h-11 bg-almost-white flex items-center">
  <div className="animate-marquee whitespace-nowrap text-xl absolute">
    New Costumers Event - 50% off first orders - Use code: NEW2025
  </div>
</div>
    <BlockHomeFirst/>
    <BlockHomeSecond/>
    <Wrapper>
    <BlockHomeThird/>
  </Wrapper>
    </>
  )
}


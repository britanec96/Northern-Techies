import React from 'react';
import { Wrapper } from '../wrapper';
import BlockHomeFirst from '../block-home-first';
import BlockHomeThird from '../block-home-third';
import BlockHomeSecond from '../block-home-second';

export const MainSection = () => {

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


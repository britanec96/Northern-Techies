import React from 'react';
import { Wrapper } from '../wrapper';
import BlockHomeFirst from '../block-home-first';
import BlockHomeThird from '../block-home-third';
import BlockHomeSecond from '../block-home-second';

export const MainSection = () => {

  return (
    <>
    <BlockHomeFirst/>
    <BlockHomeSecond/>
    <Wrapper>
    <BlockHomeThird/>
  </Wrapper>
    </>
  )
}


import React, { useEffect } from 'react';
import { Blockquote, Box, Flex } from '@mantine/core';
import { THEME_NAME } from '../enum';
import { useSelector } from 'react-redux';
import { Source_Serif_Pro } from '@next/font/google';

const SourceSerifPro = Source_Serif_Pro({
  weight: ['400'],
  style: ['italic'],
  subsets: ['latin'],
});

export const Quote = () => {
  const { theme_name } = useSelector((state: any) => state.themeReducer);
  useEffect(() => {}, [theme_name]);
  return (
    <Flex
      style={{ position: 'relative' }}
      align={'flex-end'}
      justify={'center'}
    >
      {/* <Box
        style={{
          position: 'absolute',
          display: 'flex',
          bottom: 0,
          zIndex: -1,
          opacity: 0.5,
          // transform: 'translate(0,-10%)',
        }}
      >
        <Box
          style={{
            width: '200px',
            height: '200px',
            filter: 'blur(80px)',
            background: `conic-gradient(from 44.38deg at 26.15% 92.69%, #0D9488 0deg, rgba(13, 148, 136, 0) 360deg)`,
            // marginLeft: `8rem`,
          }}
        ></Box>
        <Box
          style={{
            width: '200px',
            height: '200px',
            filter: 'blur(80px)',
            background: `conic-gradient(from -51.38deg at 68.85% 66.54%, #EA580C 0deg, rgba(234,88,12,0) 360deg)`,
            marginLeft: `8rem`,
          }}
        ></Box>
        <Box
          style={{
            width: '150px',
            height: '150px',
            filter: 'blur(80px)',
            background: `conic-gradient(from -51.38deg at 68.85% 66.54%, #380CEA 0deg, rgba(234, 88, 12, 0) 360deg)`,
            mixBlendMode: 'color-burn',
            marginLeft: `12rem`,
            position: 'absolute',
            bottom: 0,
          }}
        ></Box>
      </Box> */}
      <Blockquote
        color={theme_name != THEME_NAME.rainbow ? '' : 'lime'}
        cite='— Sadhguru'
        className={SourceSerifPro.className}
      >
        {'Those who seek perfection do not know life.'}
      </Blockquote>
    </Flex>
  );
};

export default Quote;

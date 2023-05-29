import { styled } from '@stitches/react';
import Offcanvas from '@/components/Offcanvas';
import { LenisIcon } from '@/components/Icons';

const Content = styled('header', {
  width: '100%',
  // dvh
  height: '100vh',
});

const Container = styled('div', {
  gridAutoColumns: '1fr',
  gridAutoFlow: 'row',
  gap: '1rem',

  gridTemplateAreas: `
		"brand . ."
		"social-media header-paragraph infinite-slide"
		"svg-animate threejs animation-btn"
	`,
});

const Box = styled('div', {
  variants: {
    area: {
      Brand: {
        gridArea: 'brand',
      },
      SocialMedia: {
        gridArea: 'social-media',
      },
      HeaderParagraph: {
        gridArea: 'header-paragraph',
      },
      InfiniteSlide: {
        gridArea: 'infinite-slide',
      },
      SvgAnimate: {
        gridArea: 'svg-animate',
      },
      Threejs: {
        gridArea: 'threejs',
      },
      AnimationBtn: {
        gridArea: 'animation-btn',
      },
    },
  },
});

const Header = () => {
  return (
    <>
      <Offcanvas />

      <Content>
        <Container className='grid h-full grid-cols-3 grid-rows-3 px-4'>
          <Box area='Brand' className='mt-4'>
            <LenisIcon />
          </Box>

          <Box area='SocialMedia' className=''>
            SocialMedia:
          </Box>

          <Box area='HeaderParagraph' className='text-4xl'>
            <mark>HeaderParagraph</mark>
          </Box>

          <Box area='InfiniteSlide'>InfiniteSlide</Box>
          <Box area='SvgAnimate'>SvgAnimate</Box>
          <Box area='Threejs'>Threejs3D</Box>
          <Box area='AnimationBtn'>BtnAnimate</Box>
        </Container>
      </Content>
    </>
  );
};

export default Header;

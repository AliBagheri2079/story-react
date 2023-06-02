import { styled } from '@stitches/react';
import Offcanvas from '@/components/Offcanvas';
import { LenisIcon } from '@/components/Icons';
import HeaderTitle from '@/components/HeaderTitle';
import HeaderSidebar from '@/components/HeaderSidebar';

const Content = styled('header', {
  width: '100%',
  height: '100vh',

  '@supports (height: 100svh)': {
    height: '100svh',
  },
});

const Container = styled('div', {
  gridAutoColumns: '1fr',
  gridAutoFlow: 'row',
  gap: '1rem',

  gridTemplateAreas: `
		"brand brand . . ."
		"social-media header-paragraph header-paragraph header-paragraph header-sidebar"
		"social-media header-paragraph header-paragraph header-paragraph header-sidebar"
		"svg-animate threejs threejs threejs animation-btn"
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
      HeaderSidebar: {
        gridArea: 'header-sidebar',
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
        <Container className='grid h-full grid-cols-5 grid-rows-4 px-4'>
          <Box area='Brand' className='mt-6'>
            {/* create brand component and put lenis to inside it */}
            <LenisIcon />
          </Box>

          <Box area='SocialMedia' className=''>
            SocialMedia:
          </Box>

          <Box area='HeaderParagraph'>
            <HeaderTitle />
          </Box>

          <Box area='HeaderSidebar'>
            <HeaderSidebar
              strings={[
                'These are the default values...',
                'You know what you should do?',
                'Use your own!',
                'Have a great day!',
              ]}
            />
          </Box>

          <Box area='SvgAnimate'>SvgAnimate</Box>
          <Box area='Threejs'>Threejs3D</Box>
          <Box area='AnimationBtn'>BtnAnimate</Box>
        </Container>
      </Content>
    </>
  );
};

export default Header;

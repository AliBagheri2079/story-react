import { keyframes, styled } from '@/lib/stitches.config.js';

const borderTransform = keyframes({
  '0%, 100%': {
    borderRadius: '35% 65% 37% 63% / 35% 72% 28% 65%',
  },
  '33%': {
    borderRadius: '72% 28% 48% 48% / 28% 28% 72% 72%',
  },
  '66%': {
    borderRadius: '100% 56% 56% 100% / 100% 100% 56% 56%',
  },
});

export const Text = styled('span', {
  display: 'block',
  mixBlendMode: 'difference',
  transition: 'transform 0.3s ease',
});

export const Button = styled('button', {
  position: 'relative',
  display: 'inline-block',
  width: 'calc(2.6rem + 10vw)',
  height: 'calc(2.5rem + 10vh)',

  '&::before, &::after': {
    content: '',
    position: 'absolute',
    left: 0,
    width: '100%',
  },

  '&::before': {
    top: 0,
    height: '95%',

    overflow: 'hidden',
    backgroundColor: '$red2',
    borderRadius: '60% 40% 50% 50% / 45% 35% 65% 55%',
    animation: `${borderTransform} 8s linear infinite`,
  },

  '&::after': {
    top: '10%',
    height: '100%',

    zIndex: -1,
    border: '1px solid $red4',
    borderRadius: '60% 40% 55% 45% / 55% 45% 55% 45%',
    transform: 'rotate(-20deg)',
    transition: 'transform 0.5s cubic-bezier(0.585, 2.5, 0.645, 0.55)',
  },

  '&:hover': {
    '&::before': {
      backgroundColor: '$red4',
      animationIterationCount: 0,
    },

    [`& ${Text}, &::after`]: {
      transform: 'translate3d(0, -5px, 0)',
    },
  },
});

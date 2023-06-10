import { keyframes, styled } from '@/lib/stitches.config.js';

const heightIncrease = keyframes({
  from: {
    transform: 'skew(0deg, 15deg)',
  },
  to: {
    height: '100%',
    transform: 'skew(0deg, 0deg)',
  },
});

const waveAnimate = keyframes({
  from: {
    height: '55%',
  },
  to: {
    height: 0,
    top: '100%',
  },
});

export const WaveItem = styled('div', {
  position: 'absolute',
  height: 0,
  width: '100%',
  transformOrigin: 'right bottom',

  '&.wave--animate': {
    animation: `${heightIncrease} 500ms var(--wave-delay, 200ms) ease-out both`,
  },

  '&::before, &::after': {
    content: '',
    display: 'block',
    position: 'absolute',
    width: '55%',
    borderRadius: '50% 100%',
  },

  '&.wave--animate::before, &.wave--animate::after': {
    animation: `${waveAnimate} 500ms var(--wave-delay, 300ms) ease-out both`,
  },

  '&::before': {
    right: 0,
    top: '65%',
  },

  '&::after': {
    left: '-2%',
    top: '80%',
  },
});

export const NavLink = styled('a', {
  '& .letter--reveal': {
    '&__in': {
      transform: 'translateY(100%)',
    },
  },

  '&:hover': {
    '& .letter--reveal': {
      '&__out': {
        transform: 'translateY(-100%)',
      },
      '&__in': {
        transform: 'translateY(0)',
      },
    },

    '& + sup': {
      color: '$slate12',
    },
  },
});

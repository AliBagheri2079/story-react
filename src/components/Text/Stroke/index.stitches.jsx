import { styled } from '@/lib/stitches.config.js';

export const Stroke = styled('span', {
  display: 'block',
  '-webkit-text-stroke': '2px white',
  background: 'linear-gradient(white 0 100%) left / 0 no-repeat',
  color: 'transparent',
  backgroundClip: 'text',
  transition: '0.5s linear',
});

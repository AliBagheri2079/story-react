import { styled } from '@/lib/stitches.config';

export const Line = styled('span', {
  position: 'relative',
  isolation: 'isolate',
  display: 'inline-block',
  marginInline: '0.1rem',

  '& > .line__text': {
    color: '$red4',
    textTransform: 'capitalize',
  },

  '& > .line__icon': {
    position: 'absolute',
    insetBlockEnd: 0,
    insetInlineStart: 0,
    pointerEvents: 'none',
    transition: 'stroke-dashoffset 500s cubic-bezier(0.7, 0, 0.3, 1)',
  },

  '& :where(.line--curve__graphic, .line--wave__graphic)': {
    stroke: '$red8',
    width: '100%',
    zIndex: -1,
  },

  '& .line--curve__graphic': {
    height: '50%',
    top: '80%',
  },

  '& .line--wave__graphic': {
    height: '100%',
    top: '40%',
    strokeWidth: 1,
    strokeDasharray: 1,
    // strokeDashoffset: 1,
    strokeDashoffset: 0,
  },
});

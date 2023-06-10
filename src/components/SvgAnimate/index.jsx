import { useRef } from 'react';
import { gsap } from 'gsap';
import { RopeSketch } from '../Icons';
import useGsapContext from '@/hooks/useGsapContext';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

const SvgAnimate = () => {
  const svgEl = useRef();
  const [ctx] = useGsapContext(svgEl);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#rope-line',
      start: '+=600 center',
      end: '+=500',
      pin: true,
    },
  });

  useIsomorphicLayoutEffect(() => {
    ctx.add(() => {
      tl.from('#rope-line > *:nth-of-type(1)', {
        strokeDashoffset: 2070.03,
      })
        .from('#rope-line > *:nth-of-type(2)', {
          strokeDashoffset: 214.274,
        })
        .from('#rope-line > *:nth-of-type(3)', {
          strokeDashoffset: 119.096,
        })
        .from('#rope-line > *:nth-of-type(4)', {
          strokeDashoffset: 1656.9,
        })
        .from('#rope-line > *:nth-of-type(5)', {
          strokeDashoffset: 50.2753,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={svgEl}
      className='relative'
      style={{ height: 'clamp(150px, 150px + 30vw, 600px)' }}
    >
      <RopeSketch
        id='rope-line'
        className='absolute left-0 top-24 h-full w-full stroke-red-200 stroke-2'
      />
    </div>
  );
};

export default SvgAnimate;

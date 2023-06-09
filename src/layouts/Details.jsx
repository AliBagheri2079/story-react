import { useRef } from 'react';
import { gsap } from 'gsap';
import useGsapContext from '@/hooks/useGsapContext';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { StrokeText, VerticalText } from '@/components/Text';

const Details = () => {
  const detailsEl = useRef();
  const [ctx] = useGsapContext(detailsEl);

  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: detailsEl.current,
      start: '+=500 center',
      end: 'bottom center',
      scrub: true,
    },
  });

  useIsomorphicLayoutEffect(() => {
    ctx.add(() => {
      tl.from('.vertical__heading', {
        y: 200,
        skewY: 10,
        stagger: {
          amount: 0.5,
        },
      }).fromTo(
        '.vertical__item',
        {
          y: '50vh',
        },
        {
          y: 0,
          duration: 1,
          ease: 'none',
        },
        0,
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={detailsEl} className='relative h-[150vh] py-12'>
      <div className='container'>
        <div className='vertical flex flex-col items-start justify-center lg:flex-row'>
          <div className='inset-x-0 top-1/4 h-auto w-auto overflow-hidden lg:sticky lg:h-full lg:w-1/2'>
            <h2 className='vertical__heading m-0 border-l border-solid border-l-red-200 p-6 text-6xl uppercase'>
              <StrokeText className=''>about</StrokeText>
              <StrokeText className='bg-auto'>smooth</StrokeText>
              <StrokeText className=''>scroll</StrokeText>
            </h2>
          </div>

          <div className='w-2/5'>
            <VerticalText
              className='vertical__item prose mb-60 prose-headings:text-red-200 prose-p:text-white'
              header={'Lorem ipsum title 1'}
              paragraph={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, adipisicing elit. Rerum,
                ipsum.`}
            />
            <VerticalText
              className='vertical__item prose mb-60 prose-headings:text-red-200 prose-p:text-white'
              header={'Lorem ipsum title 2'}
              paragraph={`Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                ipsum.`}
            />
            <VerticalText
              className='vertical__item prose mb-60 prose-headings:text-red-200 prose-p:text-white'
              header={'Lorem ipsum title 3'}
              paragraph={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                ipsum.`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

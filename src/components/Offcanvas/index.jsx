import { useRef, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

import Style from './index.module.css';
import { NavLink, WaveItem } from './index.stitches';
import GsapContext from '@/context/Gsap';
import { BlobButton } from '@/components/Buttons';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

const navItems = [
  { id: uuidv4(), value: 'first item', supNumber: 1 },
  { id: uuidv4(), value: 'second item', supNumber: 2 },
  { id: uuidv4(), value: 'third item', supNumber: 3 },
  { id: uuidv4(), value: 'fourth item', supNumber: 4 },
];

const Offcanvas = () => {
  const [show, setShow] = useState(false);
  const navEl = useRef();
  const listEl = useRef();

  const { useGsapContext } = useContext(GsapContext);
  const [ctx, tl] = useGsapContext(navEl);

  useIsomorphicLayoutEffect(() => {
    ctx.add(() => {
      tl.to(navEl.current, {
        height: show && '75vh',
        duration: 1,
      }).fromTo(
        listEl.current,
        {
          y: show ? '-100%' : 0,
        },
        {
          y: show ? 0 : '-100%',
        },
        '<+=1',
      );
    });

    return () => ctx.revert();
  }, [show]);

  const toggleOffcanvas = () => setShow(preState => !preState);

  return (
    <>
      {/* offcanvas toggle */}
      <div className='absolute right-0 top-0 z-10 me-6 mt-6'>
        <BlobButton onClick={toggleOffcanvas}>Menu</BlobButton>
      </div>

      <nav ref={navEl} className='relative'>
        <WaveItem
          className={cn({ 'wave--animate': show })}
          css={{
            backgroundColor: '$amber6',
            '&:before': {
              backgroundColor: '$amber6',
            },
            '&:after': {
              backgroundColor: '$blackA12',
            },
          }}
          style={{
            '--wave-delay': '200ms',
          }}
        />
        <WaveItem
          className={cn({ 'wave--animate': show })}
          css={{
            backgroundColor: '$yellow6',
            '&:before': {
              backgroundColor: '$yellow6',
            },
            '&:after': {
              backgroundColor: '$amber6',
            },
          }}
          style={{
            '--wave-delay': '450ms',
          }}
        />

        <WaveItem
          className={cn({ 'wave--animate': show })}
          css={{
            backgroundColor: '$red6',
            '&:before': {
              backgroundColor: '$red6',
            },
            '&:after': {
              backgroundColor: '$yellow6',
            },
          }}
          style={{
            '--wave-delay': '700ms',
          }}
        >
          <ul
            ref={listEl}
            className={`ms-20 flex h-full flex-col items-start justify-evenly ${Style.List}`}
          >
            {navItems.map(({ id, value, supNumber }) => (
              <li
                key={id}
                className='font-moresby text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
              >
                <NavLink
                  href='#item'
                  className='inline-flex overflow-hidden text-inherit'
                >
                  {value.split('').map((value, index) => (
                    <span
                      key={uuidv4()}
                      className='letter letter--reveal relative duration-500 first:capitalize'
                    >
                      <span
                        className='letter--reveal__out inline-flex duration-500'
                        style={{ transitionDelay: `${index * 25}ms` }}
                      >
                        {value}
                      </span>
                      <span
                        className='letter--reveal__in absolute left-0 text-black duration-500'
                        style={{ transitionDelay: `${index * 25}ms` }}
                      >
                        {value}
                      </span>
                    </span>
                  ))}

                  <svg
                    className='link__graphic link__graphic--slide'
                    width='300%'
                    height='100%'
                    viewBox='0 0 1200 60'
                    preserveAspectRatio='none'
                  >
                    <path d='M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0'></path>
                  </svg>
                </NavLink>{' '}
                <sup className='duration-500'>{supNumber}</sup>
              </li>
            ))}
          </ul>
        </WaveItem>
      </nav>
    </>
  );
};

export default Offcanvas;

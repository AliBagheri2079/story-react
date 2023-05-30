import Style from './index.module.css';
import { NavLink, WaveItem } from './index.stitches';
import { BlobButton } from '@/components/Buttons';

const Offcanvas = () => {
  return (
    <>
      {/* offcanvas toggle */}
      <div className='absolute right-0 top-0 z-10 me-6 mt-6'>
        <BlobButton>Menu</BlobButton>
      </div>

      {/* h-[75vh] */}
      <nav className='relative h-0'>
        <WaveItem
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
          {/* -translate-y-full */}
          <ul
            className={`ms-20 flex h-full -translate-y-full flex-col items-start justify-evenly ${Style.List}`}
          >
            <li className='font-moresby text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
              <NavLink
                href='#item'
                className='inline-flex overflow-hidden text-inherit'
              >
                {'hello world'.split('').map((value, index) => (
                  <span
                    key={value}
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
              <sup className='duration-500'>5</sup>
            </li>

            <li className='font-moresby text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
              <NavLink
                href='#item'
                className='inline-flex overflow-hidden text-inherit'
              >
                {'hello world'.split('').map((value, index) => (
                  <span
                    key={value}
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
              <sup className='duration-500'>5</sup>
            </li>

            <li className='font-moresby text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
              <NavLink
                href='#item'
                className='inline-flex overflow-hidden text-inherit'
              >
                {'hello world'.split('').map((value, index) => (
                  <span
                    key={value}
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
              <sup className='duration-500'>5</sup>
            </li>

            <li className='font-moresby text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
              <NavLink
                href='#item'
                className='inline-flex overflow-hidden text-inherit'
              >
                {'hello world'.split('').map((value, index) => (
                  <span
                    key={value}
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
              <sup className='duration-500'>5</sup>
            </li>
          </ul>
        </WaveItem>
      </nav>
    </>
  );
};

export default Offcanvas;

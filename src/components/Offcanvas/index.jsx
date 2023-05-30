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
          {/* -translate-y-40 */}
          <ul
            className={`ms-20 flex h-full flex-col items-start justify-evenly ${Style.List}`}
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

import PropTypes from 'prop-types';
import Style from './index.module.css';

const GooeyButton = ({ children }) => {
  return (
    <div className='relative flex h-full w-full items-end justify-end pb-4'>
      <svg
        className='absolute inset-0 h-auto w-full'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
      >
        <defs>
          <filter id='gooey'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='5' result='blur' />
            <feColorMatrix
              in='blur'
              type='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
              result='highContrastGraphic'
            />
            <feComposite
              in='SourceGraphic'
              in2='highContrastGraphic'
              operator='atop'
            />
          </filter>
        </defs>
      </svg>

      <button id='gooey-button' className={Style.GooeyButton}>
        {children}

        <span className={Style.Bubbles}>
          <span className={Style.BubblesItem}></span>
          <span className={Style.BubblesItem}></span>
          <span className={Style.BubblesItem}></span>
          <span className={Style.BubblesItem}></span>
          <span className={Style.BubblesItem}></span>
          <span className={Style.BubblesItem}></span>
          <span className={Style.BubblesItem}></span>
          <span className={Style.BubblesItem}></span>
          <span className={Style.BubblesItem}></span>
          <span className={Style.BubblesItem}></span>
        </span>
      </button>
    </div>
  );
};

GooeyButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default GooeyButton;

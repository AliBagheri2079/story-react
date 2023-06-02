import PropTypes from 'prop-types';
import { Line } from './index.stitches';
import { ReactComponent as WaveIcon } from '@/assets/icons/wave.svg';

const WaveUnderline = ({ children }) => {
  return (
    <Line className='line line--wave'>
      <span className='line__text'>{children}</span>

      <WaveIcon className='line__icon line--wave__graphic' />
    </Line>
  );
};

WaveUnderline.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default WaveUnderline;

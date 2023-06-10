import PropTypes from 'prop-types';
import Svg from '../instance';
import randomizePath from '@/utils/randomizePath';

const CurveLineIcon = ({ iconWidth, ...props }) => {
  const pathD = randomizePath(parseInt(iconWidth));

  return (
    <Svg width={iconWidth} {...props}>
      <Svg.Child
        name='Path'
        d={pathD}
        fill='transparent'
        stroke='inherit'
        strokeWidth='4'
        strokeLinecap='round'
      />
    </Svg>
  );
};

CurveLineIcon.propTypes = {
  iconWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  props: PropTypes.any,
};

export default CurveLineIcon;

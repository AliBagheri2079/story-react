import PropTypes from 'prop-types';
import { Stroke } from './index.stitches';

const StrokeText = ({ children, ...props }) => {
  return <Stroke {...props}>{children}</Stroke>;
};

StrokeText.propTypes = {
  children: PropTypes.string.isRequired,
  props: PropTypes.any,
};

export default StrokeText;

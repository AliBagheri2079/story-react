import PropTypes from 'prop-types';

const child = ({ name = '', ...props }) => {
  switch (name) {
    case 'Circle':
      return <circle {...props} />;

    case 'Rectangle':
      return <rect {...props} />;

    default:
      return <path {...props} />;
  }
};

child.propTypes = {
  name: PropTypes.oneOf(['Circle', 'Rectangle', 'Path']).isRequired,
  props: PropTypes.any,
};

const Svg = ({
  id,
  className,
  style,
  width = '100',
  height = '100',
  viewBox = '',
  children,
  ...props
}) => (
  <svg
    id={id}
    className={className}
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    {children}
  </svg>
);

Svg.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.objectOf(PropTypes.object),
  viewBox: PropTypes.string,
  children: PropTypes.element,
  props: PropTypes.any,
};

Svg.Child = child;

export default Svg;

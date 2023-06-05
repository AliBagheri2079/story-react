import PropTypes from 'prop-types';
import { Button, Text } from './index.stitches.jsx';
import Style from './index.module.css';

const BlobButton = ({ children, ...props }) => {
  return (
    <Button type='button' className={Style.Blob} {...props}>
      <Text className='font-avineo text-lg tracking-widest sm:text-xl md:text-2xl lg:text-3xl'>
        {children}
      </Text>
    </Button>
  );
};

BlobButton.propTypes = {
  children: PropTypes.string.isRequired,
  props: PropTypes.any,
};

export default BlobButton;

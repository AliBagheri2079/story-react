import React from 'react';
import Typed from 'typed.js';
import PropTypes from 'prop-types';

const useTyped = (element, options) => {
  React.useEffect(() => {
    const typed = new Typed(element?.current, options);

    return () => {
      typed.destroy();
    };
  });
};

useTyped.propTypes = {
  element: PropTypes.element.isRequired,
  options: PropTypes.objectOf(PropTypes.any),
};

export default useTyped;

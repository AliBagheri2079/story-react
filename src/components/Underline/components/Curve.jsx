import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Line } from './index.stitches';
import CurveLineIcon from '@/components/Icons/components/CurveLine';

const CurveUnderline = ({ children }) => {
  const [curveIconWidth, setCurveIconWidth] = useState(100);
  const curveTextElm = useRef();

  useEffect(() => {
    setCurveIconWidth(curveTextElm.current?.offsetWidth);

    return () => setCurveIconWidth(0);
  }, [curveTextElm.current?.offsetWidth]);

  return (
    <Line className='line line--curve'>
      <span ref={curveTextElm} className='line__text'>
        {children}
      </span>

      <CurveLineIcon
        iconWidth={curveIconWidth}
        className='line__icon line--curve__graphic'
      />
    </Line>
  );
};

CurveUnderline.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default CurveUnderline;

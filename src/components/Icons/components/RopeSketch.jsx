import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Svg from '../instance';

const data = [
  {
    element: `m 149.34404,0 v 234.53446 l -0.094,92.22 c 1,27 15.027,31.52 22.274,36.311 7.255,4.788 35.648,10.587 43.877,13.385 52.268,17.771 34.546,54.185 20.503,65.674 -5.825,4.762 -15.694,11.005 -20.352,13.969 -7.176,4.558 -14.931,8.815 -22.403,11.952 -28.281,11.873 -22.723,-2.975 -22.723,-2.975 10.234,-19.124 70.554,-42.33 74.712,-35.898 0.342,0.526 0.327,1.474 -0.444,2.467 -0.143,0.184 -1.43,0.959 -3.372,2.065 -12.992,7.409 -26.73,13.377 -40.821,18.391 -0.256,0.09 -0.508,0.18 -0.768,0.274 l -63.07,22.716 c 0,0 -5.042,1.321 -30.764,10.2 -7.318003,2.524 -10.329003,8.714 -11.179003,10.456 -3.424,6.999 2.273,15.134 9.979003,13.942 4.398,-0.685 10.027,-2.031 17.154,-4.483 17.124,-5.89 32.197,-16.94 41.638,-32.386 3.033,-4.961 5.723,-10.625 7.586,-16.955 1.911,-6.487 5.926,-12.121 11.374,-16.134 5.561,-4.1 13.584,-10.027 24.01,-17.774 22.309,-16.579 -16.36,0.91 -16.36,0.91 0,0 -58.036,25.168 -85.459,57.43 -3.285,3.862 -7.819003,9.68 -9.847003,14.329 -7.224,16.56 -19.897,58.618 4.628,98.834 0,0 7.025003,12.731 20.296003,24.236 34.301,29.746 66.265,30.077 90.136,6.42 4.782,-4.743 15.141,-15.619 19.972,-20.313 l 5.705,-5.536 c 1.87,-1.817 3.544,-3.829 4.925,-6.04 3.108,-4.999 5.226,-11.505 -14.208,-0.576 -22.061,12.408 -39.546,22.878 -45.081,26.218 -0.922,0.56 -1.829,1.14 -2.732,1.738 -3.326,2.196 -15.765,9.274 -33.864,6.077 -24.081,-4.253 -45.645003,35.417 -8.707,60.116 7.116,4.757 14.769,7.642 22.599,9.079 h -0.564 c 14.949,1.226 26.433,15.484 28.521,30.324 2.096,14.845 -3.341,29.783 -10.682,42.857 -6.405,11.4 -22.399,22.56 -25.194,35.49 -0.967,4.48 -1.272,9.07 -1.272,13.65 V 1080.01`,
    strokeDasharray: '2070.03, 2070.03',
  },
  {
    element: `m 203.25004,527.25146 c 0,0 -16.86,-26.483 -39.658,-7.861 -22.798,18.622 -26.283,32.653 -50.342,38.856 0,0 17.171,12.945 39.823,-5.037 24.804,-19.686 18.32,-29.792 50.177,-25.958 z`,
    strokeDasharray: '214.274, 214.274',
  },
  {
    element: `m 107.25004,579.33746 c 0,0 20.93,-10.231 33.867,3.884 12.934,14.111 19.133,9.831 19.133,9.831 0,0 -11.167,13.254 -27.842,-0.653 -16.671,-13.911 -25.158,-13.062 -25.158,-13.062 z`,
    strokeDasharray: '119.096, 119.096',
  },
  {
    element: `m 99.001037,489.71746 c -6.307,2.136 -15.337,4.437 -23.772,7.317 -52.324003,17.861 -74.0200032,76.127 -59.131003,120.786 14.889003,44.655 64.655003,74.427 111.026006,63.369 46.367,-11.059 61.256,-49.761 61.256,-49.761 0,0 19.567,-41.064 25.52,-51.367 2.148,-3.719 -1.685,-1.275 -7.469,3.369 -16.036,12.882 -29.823,28.351 -41.041,45.599 l -22.847,35.145 c 0,0 -28.834,41.339 -55.035003,33.619 -12.121,-3.568 -15.833,-10.378 -16.506,-16.296 -0.692,-6.001 1.891,-11.889 6.261,-16.059 4.886,-4.659 14.002,-11.638 28.928003,-17.222 6.251,-2.338 11.741,-6.632 14.972,-12.472 3.343,-6.042 5.002,-14.322 -0.951,-23.88 -12.125,-19.455 -43.708003,5.422 -43.708003,5.422 0,0 -26.412,21.605 -51.504003,14.912 -14.085,-3.752 -23.9790002,-16.8 -23.7460002,-31.374 0.218,-14.156 19.2590002,-26.757 63.5500032,-13.769 0.395,0.116 0.793,0.207 1.2,0.286 4.166,0.8 26.581,4.538 30.917,-6.735 3.411003,-8.87 -13.279,-11.739 -23.144,-12.656 -8.251,-0.767 -16.329,-2.85 -23.746,-6.547 -9.932,-4.948 -20.925,-13.31 -22.891,-26.512 -1.64,-10.998 9.206,-20.158 19.781,-16.729 3.013,0.978 6.473,2.49 10.44,4.708 23.926,13.397 30.944,18.18 65.081003,4.467 34.14,-13.717 77.431,-35.176 101.135,-61.244 7.736,-8.506 8.168,-16.033 8.168,-16.033 27.048,-1.016 49.263,-21.801 53.821,-50.957 4.174,-26.704 -11.106,-53.333 -36.224,-63.316 -0.117,-0.046 -0.229,-0.091 -0.342,-0.136 -10.034,-3.914 -20.809,-3.741 -30.478,-0.21 -3.719,1.357 -7.277,2.846 -10.643,4.937 -13.102,8.163 -24.836,18.405 -38.127,26.26 -2.628,1.553 -5.329,3.019 -8.232,3.982 -7.273,2.41 -15.378,1.444 -22.452,-1.5 -7.074,-2.948 -13.227,-7.754 -18.781,-13.033`,
    strokeDasharray: '1656.9, 1656.9',
  },
  {
    element: `m 190.25004,439.75446 c 0,4.421 3.583,8 8.004,8 4.417,0 7.996,-3.579 7.996,-8 0,-4.421 -3.579,-8 -7.996,-8 -4.421,0 -8.004,3.579 -8.004,8 z`,
    strokeDasharray: '50.2753, 50.2753',
  },
];

const RopeSketchIcon = props => {
  return (
    <Svg
      fill='none'
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 298.54599 1080.01'
      {...props}
    >
      {data.map(({ element, strokeDasharray }) => (
        <Svg.Child
          key={uuidv4()}
          name='Path'
          fill='transparent'
          stroke='inherit'
          strokeWidth='inherit'
          style={{
            strokeDasharray,
            clipRule: 'evenodd',
            fillRule: 'evenodd',
          }}
          d={element}
        />
      ))}
    </Svg>
  );
};

RopeSketchIcon.propTypes = {
  props: PropTypes.any,
};

export default RopeSketchIcon;

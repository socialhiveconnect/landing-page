import React from 'react';

interface SVGComponentProps extends React.SVGProps<SVGSVGElement> { }

const SVGComponent: React.FC<SVGComponentProps> = (props) => (
  <svg
    width="100px"
    height="100px"
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#5df0ff', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#b766cf', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#ff66c4', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M127.99976,242.79492a20.0052,20.0052,0,0,1-9.84058-2.57275L34.15869,192.74365A20.03151,20.03151,0,0,1,24,175.33228V80.66772A20.03139,20.03139,0,0,1,34.1582,63.25659l84.00049-47.47851a20.10628,20.10628,0,0,1,19.68213-.00025l84.00049,47.47852A20.03151,20.03151,0,0,1,232,80.66772v94.66456a20.03139,20.03139,0,0,1-10.1582,17.41113l-84.00049,47.47851A20.009,20.009,0,0,1,127.99976,242.79492ZM48,172.99854l80,45.21752,80-45.21752V83.00146L128,37.78394,48,83.00146Z"
      fill="url(#gradient)"
    />
  </svg>
);

export default SVGComponent;
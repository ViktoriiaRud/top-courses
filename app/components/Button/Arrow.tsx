import React from 'react';

const Arrow = (props: React.PropsWithChildren<React.SVGProps<SVGSVGElement>>) => (
  <svg
    {...props}
    width="13"
    height="12"
    viewBox="0 0 13 12"
    fill="#3B434E"
    stroke="#3B434E"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.90909 1L12 6M12 6L6.90909 11M12 6H0"/>
  </svg>
);

export default Arrow;

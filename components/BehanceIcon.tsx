import React from 'react';

const BehanceIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 7h-5v2h5V7zm-6 5c0-2.76-2.24-5-5-5S6 9.24 6 12s2.24 5 5 5c2.13 0 3.96-1.31 4.65-3.17h-2.16c-.43.76-1.24 1.27-2.18 1.27-1.4 0-2.52-1.07-2.62-2.45h7.27c.03-.22.04-.44.04-.65zm-5-3.1c1.29 0 2.36.93 2.58 2.15H8.62c.22-1.22 1.29-2.15 2.58-2.15zM2 12h4v-2H2v2zm0 4h4v-2H2v2zm0-8h4V6H2v2z"/>
  </svg>
);

export default BehanceIcon;

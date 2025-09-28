import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  console.log('Layout rendered');
  const timeStamp = new Date().toLocaleString();

  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on {timeStamp}. Copyright 2025</footer>
      </body>
    </html>
  );
}

export default RootLayout;

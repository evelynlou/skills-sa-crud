import React from 'react'
import { WebRoutes } from './routes/index';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      <WebRoutes />
      <Analytics />
    </div>
  );
}

export default App;

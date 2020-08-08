import React from 'react';
import './app.sass';

import { Info } from './components/Info/info';
import { Weather } from './components/Weather/weather';

export default () => (
  <div className="main">
    <Info />
    <Weather />
  </div>
);

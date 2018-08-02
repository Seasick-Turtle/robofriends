import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
  <div>
    <Card />
    <Card />
    <Card />
  </div>
  , document.getElementById('root'));
registerServiceWorker();

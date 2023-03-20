import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

//package way
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React>
    <App />
  </React>
);

// web dev simplified way
// ReactDOM.render(<App />, document.getElementById('root'));
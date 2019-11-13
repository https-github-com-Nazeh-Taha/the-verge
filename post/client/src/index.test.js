import React from 'react';
import ReactDOM from 'react-dom';
import App from '..index/index';
it('renders without crashing', () => {
  const div = document.getElementById("post");
  ReactDOM.render(<Article />, div);
});
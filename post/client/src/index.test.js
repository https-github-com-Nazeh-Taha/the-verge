import React from 'react';
import ReactDOM from 'react-dom';
import Article from '../index';
it('renders without crashing', () => {
  const div = document.getElementById("post");
  ReactDOM.render(<Article />, div);
});
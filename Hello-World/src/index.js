import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';
import MySecondComponent from './MySecondComponent';

ReactDOM.render(<HelloWorld />, document.getElementById('comp1'));
ReactDOM.render(<MySecondComponent />, document.getElementById('comp2'));

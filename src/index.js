import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Game from './ReactDocs/Game/GameFunc';
import Calculator from './ReactDocs/Calculator/Calculator';
import FilterableProductTable from './ReactDocs/ThinkingInReact/FilterableProductTable';
import RouterExamples from './RouterGuide/RouterExamples';
import IterationSample from './SkillsForReact/IterationSample';
import Average from './SkillsForReact/Average';


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


ReactDOM.render(
  <Average />,
  document.getElementById('root')
);


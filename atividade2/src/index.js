import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Hero from './components/questao1/Hero'
//import Enemy from './components/questao1/Enemy'
import {Arena} from './components/questao1/index'
import World from './components/questao3'
const root = document.getElementById('root')

ReactDOM.render(
<div>
    <World>
        <Arena nome="Arena 1"/>
        <br/>
        <Arena nome="Arena 2"/>
        <br/>
        <Arena nome="Arena 3"/>
    </World>
</div>, root);

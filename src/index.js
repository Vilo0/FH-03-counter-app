import ReactDom from 'react-dom';

import './index.css';
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';

const divRoot = document.querySelector('#root');

ReactDom.render(<CounterApp value={ 30 } />, divRoot);
// ReactDom.render(<PrimeraApp saludo="Hola, Soy Goku" value={ 30 } />, divRoot);
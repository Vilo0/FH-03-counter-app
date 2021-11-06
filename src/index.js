import ReactDom from 'react-dom';

import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');

ReactDom.render(<CounterApp value={ 30 } />, divRoot);
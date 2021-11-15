import '@testing-library/react';
import { shallow } from 'enzyme/build';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    test('debe de mostrar <CounterApp /> correctamente y su valor por defecto', () => {
      
        const initial = 5;
        const wrapper = shallow( <CounterApp /> );

        expect(wrapper).toMatchSnapshot();

        const contador = parseInt(wrapper.find('h2').text());
        expect(contador).toBe(initial);

    })

    test('debe de mostrar <CounterApp /> correctamente y el valor por defecto 100', () => {
      
        const wrapper = shallow( <CounterApp value={100} /> );

        const contador = wrapper.find('h2').text().trim();
        expect(contador).toBe('100');

    });

});
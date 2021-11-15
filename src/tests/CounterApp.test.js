import '@testing-library/jest-dom';
import { shallow } from 'enzyme/build';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach(() => {
        wrapper = shallow( <CounterApp /> );
    });

    test('debe de mostrar <CounterApp /> correctamente y su valor por defecto', () => {
      
        const initial = 5;

        expect(wrapper).toMatchSnapshot();

        const contador = parseInt(wrapper.find('h2').text());
        expect(contador).toBe(initial);

    })

    test('debe de mostrar <CounterApp /> correctamente y el valor por defecto 100', () => {
      
        const wrapper = shallow( <CounterApp value={100} /> );

        const contador = wrapper.find('h2').text().trim();
        expect(contador).toBe('100');

    });

    test('debe de incrementar con el botón +1', () => {
        
        wrapper.find('button').at(2).simulate('click');

        const contador = wrapper.find('h2').text().trim();

        expect(contador).toBe('6');

    });

    test('debe de incrementar con el botón -1', () => {
        
        wrapper.find('button').at(0).simulate('click');

        const contador = wrapper.find('h2').text().trim();

        expect(contador).toBe('4');

    });
    
    test('debe de incrementar con el botón reset', () => {
        
        wrapper.find('button').at(1).simulate('click');

        const contador = wrapper.find('h2').text().trim();

        expect(contador).toBe('5');

    });

});
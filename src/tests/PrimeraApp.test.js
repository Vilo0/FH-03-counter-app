import '@testing-library/react';
import { shallow } from 'enzyme/build';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    // test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
       
    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
        
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
      
        const saludo = 'Hola, Soy Gokú';
        const wrapper = shallow( <PrimeraApp saludo={saludo} /> );

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, soy Gokú';
        const subTitulo = 'Soy un subtitulos'

        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subTitulo} />);

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subTitulo);

    })
    
    
});

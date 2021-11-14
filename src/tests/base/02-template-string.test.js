import { getSaludo } from "../../base/02-template-string";

describe('Pruebas 02-template-string', () => {
    test('getSaludo debe de retornar hola vilo', () => {
        const nombre = 'Vilo';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola Vilo');
    });

    test('getSaludo debe de retornar Hola Pedro si no hay argumento nombre', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Pedro');
    });
});
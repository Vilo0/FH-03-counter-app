describe('pruebas en el archivo demo.test', () => {
    test('deben de ser iguales los string', () => {
        // inicialización
        const mensaje = 'Hola Mundo';
    
        // estímulo
        const mensaje2 = 'Hola Mundo';
    
        // observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
});
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('getUserActivo debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'Edgard'
        }

        const user = getUsuarioActivo('Edgard');

        expect(user).toEqual(userTest);
    });
});
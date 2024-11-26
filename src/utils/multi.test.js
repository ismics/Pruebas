import { describe, expect, it } from "vitest";
import {multi} from './multi'

describe('Funcion Multi', () => {

    it('Multi debe ser una funcion', () => {
        expect(typeof multi).toBe('function');
    });

    it('Multi debe multiplicar correctamente dos numeros positivos', () => {
        expect(multi(3,4)).toBe(12);
    });

    if('Multi debe multiplicar correctamente dos numeros negativos', () => {
        expect(multi(-8,-5)).toBe(40);
    });

    it('la multi debe multiplicar un numero negativo y otro positivo', () => {
        expect(multi(-2,5)).toBe(-10)
    });

});


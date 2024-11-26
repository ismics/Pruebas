import { describe, expect, it } from "vitest";
import {sum} from './sum'

describe('Funcion Suma', () => {

    it('Suma debe ser una funcion', () => {
        expect(typeof sum).toBe('function');
    });

    it('Suma debe sumar correctamente dos numeros positivos', () => {
        expect(sum(3,4)).toBe(7);
    });

    it('la suma de -2 y 5 debe dar 3', () => {
        const result = sum(-2,5);
        expect(result).toBe(3)
        });

        it('la suma de -2 y 5 debe dar 3', () => {
            expect(sum(-2,5)).toBe(3)
            });
});


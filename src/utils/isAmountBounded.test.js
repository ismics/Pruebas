import { describe, expect, it } from "vitest";
import {isAmountBounded} from './isAmountBounded'

describe("Funcion isAmountBounded", () => {

    it("El numero no puede ser menor que 1", () => {
        expect(isAmountBounded(0)).toBe(false);
    });

    it("El numero no puede ser mayor a 1000", () => {
        expect(isAmountBounded(1001)).toBe(false);
    });

    it("El numero esta entre 1 y 1000", () => {
        expect(isAmountBounded(333)).toBe(true);
    });
});
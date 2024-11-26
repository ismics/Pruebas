import { describe, expect, it } from "vitest";
import {validateText} from './validateText'

describe('Funcion validateText', () => {

    it('validateText tiene que tener entre 6 y 10 caracteres', () => {
        expect(validateText('mineral')).toBe(true);
    });

    it("validateText no puede tener menos que 6", () => {
        expect(validateText('abc')).toBe(false);
    });

    it("validateText no puede tener mas que 10", () => {
        expect(validateText("helicoptero")).toBe(false);
    });

    it("validateText tiene que ser texto", () => {
        expect(validateText(123)).toBe(false);
    });
});
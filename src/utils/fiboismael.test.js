import { describe, expect, it } from "vitest";
import {fiboismael} from './fiboismael'

describe("Funcion fiboismael", () => {

    it("Fibonacci de 5 es 5", () => {
        expect(fiboismael(5)).toBe(5);
    });

    it("Fibonacci de 12 es 144", () => {
        expect(fiboismael(12)).toBe(145);
    });

    it("Fibonacci de 33 es 3524578", () => {
        expect(fiboismael(33)).toBe(3524578);
    });

});
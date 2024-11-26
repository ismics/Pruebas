import { describe, expect, it } from "vitest";
import {isApproved} from './isApproved'

describe('Funcion isApproved', () => {

    it("isApproved si es menor que 5 esta suspendido", () => {
        expect(isApproved(4)).toBe(false);
    });

    it("isApproved si es mayor a 5 esta aprobado", () => {
        expect(isApproved(7)).toBe(true);
    });

    it("isApproved si es menor que 0 es null", () => {
        expect(isApproved(-1)).toBe(null);
    });

    it("isApproved si es mayor a 10 es null", () => {
        expect(isApproved(11)).toBe(null);
    });

});
import { describe, expect, it } from "vitest";
import {isWorkday} from './isWorkday'

describe("Funcion isWorkday", () => {

    it("isWorkday es lunes", () => {
        expect(isWorkday("lunes")).toBe(true);
    });

    it("isWorkday es martes", () => {
        expect(isWorkday("martes")).toBe(true);
    });

    it("isWorkday es miercoles", () => {
        expect(isWorkday("miercoles")).toBe(true);
    });

    it("isWorkday es jueves", () => {
        expect(isWorkday("jueves")).toBe(true);
    });

    it("isWorkday es viernes", () => {
        expect(isWorkday("viernes")).toBe(true);
    });

    it("isWorkday es sabado", () => {
        expect(isWorkday("sabado")).toBe(false);
    });

    it("isWorkday es domingo", () => {
        expect(isWorkday("domingo")).toBe(false);
    });

    it("isWorkday es defautl", () => {
        expect(isWorkday("pepe")).toBe(false);
    });
})
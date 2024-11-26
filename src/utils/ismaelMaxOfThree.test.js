import { describe, expect, it } from "vitest";
import {ismaelMaxOfThree} from './ismaelMaxOfThree'

describe("Funcion ismaelMaxOfThree", () => {

    it("Cuando C es mas alto devuelce C", () => {
        expect(ismaelMaxOfThree(1,2,3)).toBe(3);
    });

    it("Cuando B es mas alto devuelve B", () => {
        expect(ismaelMaxOfThree(2,5,2)).toBe(5);
    });
    
    it("Cuando A es mas alto devuelve A", () => {
        expect(ismaelMaxOfThree(6,1,1)).toBe(6);
    });
});
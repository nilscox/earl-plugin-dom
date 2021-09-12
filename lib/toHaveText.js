"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveText = void 0;
const internals_1 = require("earljs/internals");
function toHaveText(expected) {
    const ctrl = internals_1.getControl(this);
    const actual = ctrl.actual.textContent;
    const check = () => {
        if (typeof expected === 'string') {
            return expected === actual;
        }
        return actual !== null && expected.exec(actual) !== null;
    };
    ctrl.assert({
        success: check(),
        reason: `expected element ${ctrl.actual} to have text ${expected.toString()}, but it is ${actual}`,
        negatedReason: `expected element ${ctrl.actual} not to have text ${expected.toString()}, but it does`,
    });
}
exports.toHaveText = toHaveText;

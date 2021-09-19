"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveStyle = void 0;
const earljs_1 = require("earljs");
const internals_1 = require("earljs/internals");
function toHaveStyle(expected) {
    const ctrl = internals_1.getControl(this);
    const actual = window.getComputedStyle(ctrl.actual);
    ctrl.assert({
        success: earljs_1.expect.objectWith(expected).check(actual),
        reason: `expected element ${ctrl.actual} to have styles ${expected}, but it is ${actual}`,
        negatedReason: `expected element ${ctrl.actual} not to have style ${expected}, but it does`,
    });
}
exports.toHaveStyle = toHaveStyle;

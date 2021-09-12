"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeVisible = void 0;
const internals_1 = require("earljs/internals");
function toBeVisible() {
    const ctrl = internals_1.getControl(this);
    const actual = window.getComputedStyle(ctrl.actual).visibility;
    ctrl.assert({
        success: actual === "visible",
        reason: `element ${ctrl.actual} is not visible`,
        negatedReason: `element ${ctrl.actual} is visible`,
    });
}
exports.toBeVisible = toBeVisible;

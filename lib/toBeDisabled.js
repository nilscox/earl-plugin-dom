"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeDisabled = void 0;
const internals_1 = require("earljs/internals");
// inspired by
// https://github.com/testing-library/jest-dom/blob/main/src/to-be-disabled.js
function isElementDisabled(element) {
    return element.hasAttribute("disabled");
}
function isAncestorDisabled(element) {
    if (!element.parentElement) {
        return false;
    }
    return isElementOrAncestorDisabled(element.parentElement);
}
function isElementOrAncestorDisabled(element) {
    return isElementDisabled(element) || isAncestorDisabled(element);
}
function toBeDisabled() {
    const ctrl = internals_1.getControl(this);
    const element = ctrl.actual;
    ctrl.assert({
        success: isElementOrAncestorDisabled(element),
        reason: `expected element ${ctrl.actual} to be disabled, but it is not`,
        negatedReason: `expected element ${ctrl.actual} not to be disabled, but it is`,
    });
}
exports.toBeDisabled = toBeDisabled;

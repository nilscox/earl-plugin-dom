"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const toBeDisabled_1 = require("./toBeDisabled");
const toBeVisible_1 = require("./toBeVisible");
const toHaveText_1 = require("./toHaveText");
exports.plugin = {
    validators: {
        toBeDisabled: toBeDisabled_1.toBeDisabled,
        toBeVisible: toBeVisible_1.toBeVisible,
        toHaveText: toHaveText_1.toHaveText,
    },
};

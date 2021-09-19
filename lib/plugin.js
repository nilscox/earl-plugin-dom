"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const toBeDisabled_1 = require("./toBeDisabled");
const toBeVisible_1 = require("./toBeVisible");
const toHaveText_1 = require("./toHaveText");
const toHaveValue_1 = require("./toHaveValue");
const toHaveStyle_1 = require("./toHaveStyle");
exports.plugin = {
    validators: {
        toBeDisabled: toBeDisabled_1.toBeDisabled,
        toBeVisible: toBeVisible_1.toBeVisible,
        toHaveText: toHaveText_1.toHaveText,
        toHaveValue: toHaveValue_1.toHaveValue,
        toHaveStyle: toHaveStyle_1.toHaveStyle,
    },
};

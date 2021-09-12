"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const internals_1 = require("earljs/internals");
const plugin_1 = require("./plugin");
Object.defineProperty(exports, "plugin", { enumerable: true, get: function () { return plugin_1.plugin; } });
internals_1.loadPlugin(plugin_1.plugin);

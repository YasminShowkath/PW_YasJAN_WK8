"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.prototype.browserType = function (type) {
        console.log("Browser Type: ".concat(type));
    };
    Browser.prototype.browserVersion = function (version) {
        console.log("Browser Version: ".concat(version));
    };
    return Browser;
}());
exports.Browser = Browser;

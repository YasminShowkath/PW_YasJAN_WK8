"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentMethod = void 0;
var ParentMethod = /** @class */ (function () {
    function ParentMethod() {
    }
    ParentMethod.prototype.loadUrl = function () {
        console.log("Load the url");
    };
    ParentMethod.prototype.loginInfo = function () {
        console.log("Login Info");
    };
    return ParentMethod;
}());
exports.ParentMethod = ParentMethod;

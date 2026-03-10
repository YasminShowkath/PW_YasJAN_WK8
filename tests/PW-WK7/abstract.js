var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var test = /** @class */ (function () {
    function test() {
    }
    test.prototype.login = function () {
        console.log("login method");
    };
    test.prototype.load = function () {
        console.log("Load method");
    };
    return test;
}());
var test2 = /** @class */ (function (_super) {
    __extends(test2, _super);
    function test2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test2.prototype.create = function () {
        console.log("Create method  implemented.");
    };
    test2.prototype.edit = function () {
        console.log("edit method implemented.");
    };
    return test2;
}(test));
var obj100 = new test2();
obj100.create();
obj100.edit();
obj100.load();
obj100.login();

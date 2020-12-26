"use strict";
var Asus = /** @class */ (function () {
    function Asus(name) {
        this.name = name;
    }
    Asus.prototype.on = function () {
        console.log('Nyala');
    };
    Asus.prototype.off = function () {
        console.log('Mati');
    };
    return Asus;
}());
console.log(new Asus('Asus Zephyrus').name);

"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length; j++) {
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var lefthand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = lefthand;
                    }
                }
                if (typeof this.collection === 'string') {
                    this.collection.
                    ;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, -3, 69, 0, 420]);
sorter.sort();
console.log(sorter.collection);

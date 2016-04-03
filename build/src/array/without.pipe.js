System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var WithoutPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WithoutPipe = (function () {
                function WithoutPipe() {
                }
                WithoutPipe.prototype.transform = function (array, args) {
                    if (!Array.isArray(array)) {
                        throw new TypeError('WithoutPipe: value is not an array');
                    }
                    var values = [];
                    array.forEach(function (value) {
                        if (args.indexOf(value) === -1) {
                            values.push(value);
                        }
                    });
                    return values;
                };
                WithoutPipe = __decorate([
                    core_1.Pipe({
                        name: 'without',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], WithoutPipe);
                return WithoutPipe;
            }());
            exports_1("WithoutPipe", WithoutPipe);
        }
    }
});
//# sourceMappingURL=without.pipe.js.map
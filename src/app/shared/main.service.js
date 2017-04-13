"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var MainService = (function () {
    function MainService(http, router) {
        this.http = http;
        this.router = router;
        this.btnHidden = new core_1.EventEmitter();
    }
    MainService.prototype.getData = function () {
        return this.http.get('api/data1')
            .map(function (res) { return res.json().data; })
            .catch(this.catchError);
    };
    MainService.prototype.changeColor = function () {
        var colors = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var color = '';
        for (var j = 0; j < 6; j++) {
            var i = Math.floor(Math.random() * colors.length);
            color += colors[i];
        }
        return color;
    };
    MainService.prototype.catchError = function (error) {
        console.error(error.message || error);
    };
    MainService.prototype.changeBtn = function (value) {
        this.btnHidden.emit(value);
    };
    MainService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], MainService);
    return MainService;
}());
exports.MainService = MainService;
//# sourceMappingURL=main.service.js.map
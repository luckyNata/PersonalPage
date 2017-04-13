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
var core_1 = require('@angular/core');
var main_service_1 = require('../shared/main.service');
var router_1 = require('@angular/router');
var WrapperComponent = (function () {
    function WrapperComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
    }
    WrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.navigate(['']);
        this.changeColor();
        setInterval(function () {
            _this.changeColor();
        }, 3000);
        this.mainService.getData()
            .subscribe(function (mas) {
            _this.data1 = mas;
            _this.flag = _this.data1.flag;
            console.log('data1', mas);
        });
        this.mainService.btnHidden.subscribe(function (data) {
            _this.hideFlag = data;
            console.log('onInit', _this.hideFlag);
        });
    };
    WrapperComponent.prototype.changeColor = function () {
        this.color = this.mainService.changeColor();
    };
    WrapperComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wrapper',
            templateUrl: 'wrapper.component.html',
            styleUrls: ['wrapper.component.css']
        }), 
        __metadata('design:paramtypes', [main_service_1.MainService, router_1.Router])
    ], WrapperComponent);
    return WrapperComponent;
}());
exports.WrapperComponent = WrapperComponent;
//# sourceMappingURL=wrapper.component.js.map
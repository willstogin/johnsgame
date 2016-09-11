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
var app_service_1 = require('../app.service');
var ComponentZoneCrashsite = (function () {
    function ComponentZoneCrashsite(appService) {
        this.appService = appService;
    }
    ComponentZoneCrashsite.prototype.getPlayers = function () {
        var _this = this;
        this.appService.getPlayerList().then(function (players) { return _this.players = players; });
    };
    ComponentZoneCrashsite.prototype.ngOnInit = function () {
        this.getPlayers();
    };
    ComponentZoneCrashsite = __decorate([
        core_1.Component({
            selector: 'component-zone-crashsite',
            providers: [app_service_1.AppService],
            template: "<h1>My First Angular 2 App HI</h1>\n    <h2>Players: {{players}}\n               "
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], ComponentZoneCrashsite);
    return ComponentZoneCrashsite;
}());
exports.ComponentZoneCrashsite = ComponentZoneCrashsite;
//# sourceMappingURL=componentZoneCrashsite.js.map
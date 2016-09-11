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
var player_1 = require('./player');
var app_service_1 = require('../app.service');
var ComponentPlayer = (function () {
    function ComponentPlayer(player) {
    }
    ComponentPlayer = __decorate([
        core_1.Component({
            selector: 'component-player',
            providers: [app_service_1.AppService],
            template: "{{_player.name}} {{_player.health}} {{_player.water}}"
        }), 
        __metadata('design:paramtypes', [player_1.Player])
    ], ComponentPlayer);
    return ComponentPlayer;
}());
exports.ComponentPlayer = ComponentPlayer;
//# sourceMappingURL=componentPlayer.js.map
"use strict";
var Player = (function () {
    function Player($name) {
        this.name = $name;
        this.health = 5;
        this.water = 20;
    }
    Player.isPlayer = function (player) {
        return (typeof player !== 'string');
    };
    Object.defineProperty(Player.prototype, "$name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.toString = function () {
        return "Player with name: " + this.$name;
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=player.js.map
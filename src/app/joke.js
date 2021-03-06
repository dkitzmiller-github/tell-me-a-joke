"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joke = (function () {
    function Joke(setup, punchline) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }
    Joke.prototype.toggle = function () {
        this.hide = !this.hide;
    };
    return Joke;
}());
exports.Joke = Joke;

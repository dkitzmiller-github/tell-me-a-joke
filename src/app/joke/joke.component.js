"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var JokeComponent = (function () {
    function JokeComponent() {
        this.jokeDeleted = new core_1.EventEmitter();
    }
    JokeComponent.prototype.deleteItem = function () {
        this.jokeDeleted.emit(this.data);
    };
    JokeComponent.prototype.ngOnInit = function () {
    };
    return JokeComponent;
}());
__decorate([
    core_1.Input('joke')
], JokeComponent.prototype, "data");
__decorate([
    core_1.Output()
], JokeComponent.prototype, "jokeDeleted");
JokeComponent = __decorate([
    core_1.Component({
        selector: 'joke',
        templateUrl: './joke.component.html',
        styleUrls: ['./joke.component.css']
    })
], JokeComponent);
exports.JokeComponent = JokeComponent;

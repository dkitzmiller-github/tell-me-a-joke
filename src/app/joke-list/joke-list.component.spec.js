"use strict";
exports.__esModule = true;
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var joke_list_component_1 = require("./joke-list.component");
describe('JokeListComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [joke_list_component_1.JokeListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(joke_list_component_1.JokeListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});

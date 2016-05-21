System.register(['@angular/core'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var templ, HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            templ = "\n<div class=\"ui container\">\n    <div id=\"cards\" class=\"ui four column doubling stackable grid container segment\">\n        <div *ngFor=\"let card of cards_DEBUG\" class=\"column\">\n            <div class=\"ui fluid card\">\n                <div class=\"image\">\n                    <img [src]=\"[card.img]\">\n                </div>\n                <div class=\"content\">\n                    <span class=\"header\">{{card.header}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
            HomeComponent = (function () {
                function HomeComponent(elementRef) {
                    this.pageTitle = 'Home Component';
                    this.pageIcon = 'circular home icon';
                    this.cards_DEBUG = [
                        {
                            "header": "A Cute Kitten",
                            "img": "https://placekitten.com/1000/1000"
                        },
                        {
                            "header": "Another Cute Kitten",
                            "img": "https://placekitten.com/600/600"
                        },
                        {
                            "header": "And Another!",
                            "img": "https://placekitten.com/700/700"
                        },
                        {
                            "header": "Kittens Everywhere!",
                            "img": "https://placekitten.com/800/800"
                        }
                    ];
                    this.elementRef = elementRef;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    jQuery(this.elementRef.nativeElement)
                        .find('#cards')
                        .sortable()
                        .disableSelection();
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        template: templ
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map
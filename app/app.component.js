System.register(['rxjs/Rx', '@angular/core', '@angular/http', '@angular/router', './home/home.component', './connect/connect.component', './resume/resume.component', './shared/navbar/navbar.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, home_component_1, connect_component_1, resume_component_1, navbar_component_1;
    var templ, AppComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (connect_component_1_1) {
                connect_component_1 = connect_component_1_1;
            },
            function (resume_component_1_1) {
                resume_component_1 = resume_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            templ = "\n<div>\n    <navbar></navbar>\n    <router-outlet></router-outlet>\n</div>\n";
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.pageTitle = 'App Component';
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.router.navigate(['/home']);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard-app',
                        template: templ,
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            navbar_component_1.NavbarComponent
                        ],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.Routes([
                        { path: '/home', component: home_component_1.HomeComponent },
                        { path: '/connect', component: connect_component_1.ConnectComponent },
                        { path: '/resume', component: resume_component_1.ResumeComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
/// <reference path="../typings/browser.d.ts" />
import 'rxjs/Rx'; 

import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES, Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConnectComponent } from './connect/connect.component'
import { ResumeComponent } from './resume/resume.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

var templ = `
<div>
    <navbar></navbar>
    <router-outlet></router-outlet>
</div>
`;

@Component({
    selector: 'dashboard-app',
    template: templ,
    directives: [
        ROUTER_DIRECTIVES,
        NavbarComponent
    ],
    providers: [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS
    ]
})

@Routes([
    { path: '/home',        component: HomeComponent },
    { path: '/connect',        component: ConnectComponent },
    { path: '/resume',      component: ResumeComponent }
])
export class AppComponent implements OnInit {
    pageTitle: string = 'App Component';

    constructor(private router: Router) { }

    ngOnInit() {
        this.router.navigate(['/home']);
    }
}

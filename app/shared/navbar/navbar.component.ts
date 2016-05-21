import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

var templ = `
<nav class="ui borderless menu">
    <div class="ui container">
        <a class="item" *ngFor="let link of links_DEBUG" [routerLink]="[link.url]">
            <i [class]="[link.icon]"></i> {{link.text}}
        </a>
    </div>
</nav>
`;

@Component({
    selector: 'navbar',
    template: templ,
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class NavbarComponent {
    public pageTitle: string = 'Navbar Component';
    
    public links_DEBUG: Array<Object> = [
        {
            "url": "/home",
            "text": "Home",
            "icon": "home icon"   
        },
        {
            "url": "/connect",
            "text": "Connect",
            "icon": "add user icon"   
        },
        {
            "url": "/resume",
            "text": "Resume",
            "icon": "file text icon"   
        }
    ]
}
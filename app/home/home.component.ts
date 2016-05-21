import {Component, ElementRef, Inject, OnInit} from '@angular/core';

var templ: string = `
<div class="ui container">
    <div id="cards" class="ui four column doubling stackable grid container segment">
        <div *ngFor="let card of cards_DEBUG" class="column">
            <div class="ui fluid card">
                <div class="image">
                    <img [src]="[card.img]">
                </div>
                <div class="content">
                    <span class="header">{{card.header}}</span>
                </div>
            </div>
        </div>
    </div>
</div>
`;

@Component({
    template: templ
})

export class HomeComponent implements OnInit {
    public pageTitle: string = 'Home Component';
    public pageIcon: string = 'circular home icon';
    
    public cards_DEBUG: Array<Object> = [
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
    ]
    
    elementRef: ElementRef;
     
    constructor(@Inject(ElementRef) elementRef : ElementRef) { 
        this.elementRef = elementRef; 
    }
     
    ngOnInit() { 
        jQuery(this.elementRef.nativeElement)
            .find('#cards')
            .sortable()
            .disableSelection() 
    }
}

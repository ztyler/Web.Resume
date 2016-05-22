import { Component } from '@angular/core';

var templ: string = `
<div class="ui container">
    <h2 style="margin-top: 15px" class="ui center aligned inverted icon header">
        <i class="{{pageIcon}}"></i>
        {{pageTitle}}
    </h2>
</div>
`;

@Component({
    template: templ
})

export class ConnectComponent {
    public pageTitle: string = 'Connect Component';
    public pageIcon: string = 'circular user add icon'
    
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
}
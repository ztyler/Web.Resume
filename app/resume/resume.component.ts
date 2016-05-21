import { Component } from '@angular/core';

let templ = `
<div class="ui container">
    <h2 style="margin-top: 15px" class="ui center aligned icon header">
        <i class="{{pageIcon}}"></i>
        {{pageTitle}}
    </h2>
    <div class="ui raised container segment"><h1>CONTAINER TEST</h1></div>
</div>
`;

@Component({
    template: templ
})

export class ResumeComponent {
    public pageTitle: string = 'Resume Component';
    public pageIcon: string = 'circular file text icon';
}
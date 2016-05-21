import {Component, ElementRef, Inject, OnInit} from '@angular/core'; 

declare var jQuery: any; 

@Component({ 
    selector: 'jquery-integration'
}) 

export class JqueryIntegration implements OnInit { 
    elementRef: ElementRef;
     
    constructor(@Inject(ElementRef) elementRef : ElementRef) { 
        this.elementRef = elementRef; 
    }
     
    ngOnInit() { 
        jQuery(this.elementRef.nativeElement).find('#cards').hide(); 
    } 
};
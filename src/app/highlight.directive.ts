import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'rgb(95, 40, 3)';
     element.nativeElement.style.color = 'white'
   }

}

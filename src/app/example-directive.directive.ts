import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appExampleDirective]'
})
export class ExampleDirectiveDirective {

  constructor(private val:ElementRef) { 
    val.nativeElement.style.color="red";
    val.nativeElement.style.backgroundcolor="yellow";
  }

}

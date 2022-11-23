import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'red');
  }


  onShowColor(color: string) {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', color);
  }

}

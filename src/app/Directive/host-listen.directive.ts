import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListen]'
})
export class HostListenDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  // @HostListener('click') myClick() {
  //   alert('clicked!!!!!');
  // }

  @HostListener('click') myClickColor() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseover') myMouseOver() {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'yellow');
  }

  @HostListener('mouseout') myMouseOut() {
    this.renderer.setStyle(this.element.nativeElement, 'background', '')
  }

}

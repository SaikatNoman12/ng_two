import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Directive({
  selector: '[appBindHost]'
})
export class BindHostDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostBinding('class.myClass') myClass: any;

  @HostBinding('style.background') myColor: any;


  // @HostListener('click') myClick() {
  //   this.myClass = true;
  // }

  @HostListener('mouseover') mouseOut() {
    this.myColor = 'green';
  }

  @HostListener('mouseout') mouseout() {
    this.myColor = 'red';
  }

  @HostBinding('attr.title') myAttr: any;
  @HostListener('click') clicked() {
    this.myAttr = 'Hello Angular JavaScript'
  }

}

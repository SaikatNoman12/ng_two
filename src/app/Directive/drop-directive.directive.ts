import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDirective]'
})
export class DropDirectiveDirective {

  constructor() { }

  @HostBinding('class.active') myClass: any;

  @HostListener('click') myClick() {
    this.myClass = !this.myClass;
  }

}

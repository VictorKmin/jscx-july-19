import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHowerizer]'
})
export class HowerizerDirective {

  constructor(private compon: ElementRef) {
  }

  @Input() appHowerizer;

  @HostBinding('style.backgroundColor') bgC;

  @HostListener('mouseleave') colorizer() {
    this.bgC = this.appHowerizer || 'greenyellow';
  }

  @HostListener('mouseenter') anotherFunc() {
    this.bgC = 'white';
  }

}

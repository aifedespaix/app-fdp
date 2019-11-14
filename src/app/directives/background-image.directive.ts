import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[backgroundImage]'
})
export class BackgroundImageDirective implements AfterViewInit {
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @Input() backgroundImage: string;

  ngAfterViewInit() {
    this.el.style.backgroundImage = `url("${this.backgroundImage}")`;
  }

}

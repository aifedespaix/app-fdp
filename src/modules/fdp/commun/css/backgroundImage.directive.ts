import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appBackgroundImage]'
})
export class BackgroundImageDirective implements AfterViewInit {
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @Input('appBackgroundImage') backgroundImageUrl: string;

  ngAfterViewInit(): void {
      this.el.style.backgroundImage = `url("${encodeURI(this.backgroundImageUrl)}")`;
  }

}

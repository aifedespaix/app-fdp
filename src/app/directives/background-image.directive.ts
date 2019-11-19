import {AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[backgroundImage]',
})
export class BackgroundImageDirective implements AfterViewInit, OnChanges {
  @Input() backgroundImage: string;
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngAfterViewInit() {
    this.changeBackground();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.input) {
      this.backgroundImage = changes.input.currentValue;
      this.changeBackground();
    }
  }

  private changeBackground() {
    this.el.style.backgroundImage = `url("${this.backgroundImage}")`;
  }

}

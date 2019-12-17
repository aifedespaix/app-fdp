import {AfterViewInit, Directive, ElementRef, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective implements AfterViewInit {
  @Output() private readonly scrolled: EventEmitter<null>;

  private _intersectionObserver: IntersectionObserver;

  constructor(
    private _element: ElementRef,
  ) {
    this.scrolled = new EventEmitter<null>();
  }

  ngAfterViewInit(): void {
    if (this._element.nativeElement.nextSibling) {
      return;
    }
    this._intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (this.checkIfIntersecting(entry)) {
          this.scrolled.emit();
          this._intersectionObserver.unobserve(this._element.nativeElement);
          this._intersectionObserver.disconnect();
        }
      });
    });
    this._intersectionObserver.observe(this._element.nativeElement);
  }


  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return (entry).isIntersecting && entry.target === this._element.nativeElement;
  }
}

import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sound-edit-cursor',
  templateUrl: './sound-edit-cursor.component.html',
  styleUrls: ['./sound-edit-cursor.component.scss'],
})
export class SoundEditCursorComponent implements OnInit {

  @Input() min: number;
  @Input() max: number;
  @Input() actual: number;
  @ViewChild('from') private readonly sliceFrom: ElementRef<CdkDrag>;
  @ViewChild('actual') private readonly sliceActual: ElementRef<HTMLBaseElement>;
  @ViewChild('to') private readonly sliceTo: ElementRef<HTMLBaseElement>;
  @ViewChild('canvas') private readonly canvas: ElementRef<HTMLCanvasElement>;
  private canvasContext: CanvasRenderingContext2D;

  constructor(private _elemRef: ElementRef<HTMLBaseElement>) {
  }

  ngOnInit() {
    console.log(this.sliceFrom.nativeElement);
    console.log(this._elemRef.nativeElement.offsetHeight);
  }

  test() {
    console.log('eee');
  }

  drag() {
    console.log("aaaaa");
    // console.log(e.layerX);
    // console.log(e.clientX);
    // console.log(e.clientX - this._elemRef.nativeElement.clientLeft);
    // console.log(this._elemRef.nativeElement);
    // this.sliceTo.nativeElement.style.left = `${e.layerX}px`;
  }


  get elemRef(): ElementRef<HTMLBaseElement> {
    return this._elemRef;
  }
}

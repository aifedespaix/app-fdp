import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from} from 'rxjs';
import {SoundService} from '../sound.service';

@Component({
  selector: 'app-sound-wave',
  templateUrl: './sound-wave.component.html',
  styleUrls: ['./sound-wave.component.scss'],
})
export class SoundWaveComponent implements OnInit {

  private readonly FROM = 1;
  private readonly TO = 2;
  private audioBuffer: AudioBuffer;
  private source: AudioBufferSourceNode;

  @ViewChild('svg') private svg: ElementRef<SVGElement>;

  @ViewChild('wave') private wave: ElementRef<SVGRectElement>;
  @ViewChild('waveReaded') private waveReaded: ElementRef<SVGRectElement>;
  @ViewChild('waveSlice') private waveSlice: ElementRef<SVGRectElement>;

  @ViewChild('sliceFrom') private sliceFrom: ElementRef<SVGRectElement>;
  @ViewChild('sliceTo') private sliceTo: ElementRef<SVGRectElement>;

  private actualSlicer: number;

  private width: number;
  private height: number;
  private readonly smoothing: number;
  private drag: boolean;

  constructor(
    private readonly http: HttpClient,
    private readonly soundService: SoundService,
    private readonly elementRef: ElementRef<HTMLElement>,
  ) {
    this.smoothing = 2;
    this.drag = false;
    this.actualSlicer = null;
  }

  ngOnInit() {
    this.svg.nativeElement.addEventListener('click', e => {
      const position = e.offsetX / this.svg.nativeElement.getBoundingClientRect().width;
      this.actualSlicer = this.getNearestSlicer(position * this.audioBuffer.duration);
      this.moveSlicer(position * this.audioBuffer.duration);
    });

    this.svg.nativeElement.addEventListener('mousedown', e => {
      this.drag = true;
      const position = e.offsetX / this.svg.nativeElement.getBoundingClientRect().width;
      this.actualSlicer = this.getNearestSlicer(position * this.audioBuffer.duration);
    });

    this.http.get('http://192.168.1.38:3000/file/5cd2b6c2f83d75631421a787/Yd5H-Pui-nA-1557152350219.flv.mp3', {
      responseType: 'blob',
    }).subscribe(async (blob: Blob) => {
      this.initWaveViewers();
      const arrayBuffer = await new Response(blob).arrayBuffer();

      const observable = from(this.soundService.audioContext.decodeAudioData(arrayBuffer));
      observable.subscribe((audioBuffer: AudioBuffer) => {
        this.audioBuffer = audioBuffer;
        const waveformData = this.getWaveformData(audioBuffer);
        this.svg.nativeElement
          .querySelector('path')
          .setAttribute('d', this.getSVGPath(waveformData));

        this.audioSliceFrom = 1;
        this.audioSliceTo = 2.4;
      });
    });

    // this.source..ontimeupdate = (e) => {
    // this.updateAudioPosition();
    // };

  }

  @HostListener('window:mouseup', ['$event']) mouseUp(event) {
    if (this.drag) {
      this.drag = false;
      this.actualSlicer = null;
      this.play();
    }
  }

  @HostListener('window:mousemove', ['$event']) mouseMove(e) {
    console.log('this.svg.nativeElement.getBoundingClientRect().width');
    console.log(this.svg.nativeElement.getBoundingClientRect().width);
    console.log(e.offsetX);
    console.log(this.elementRef.nativeElement.offsetLeft);
    if (this.drag) {
      const position = e.offsetX / this.svg.nativeElement.getBoundingClientRect().width;
      this.moveSlicer(position * this.audioBuffer.duration);
    }
  }

  private moveSlicer(audioPosition) {
    switch (this.actualSlicer) {
      case this.FROM:
        this.audioSliceFrom = audioPosition;
        break;
      case this.TO:
        this.audioSliceTo = audioPosition;
        break;
    }
  }

  private getNearestSlicer(audioValue: number) {
    if (Math.abs(audioValue - this.audioSliceFrom) < Math.abs(audioValue - this.audioSliceTo)) {
      return this.FROM;
    } else {
      return this.TO;
    }
  }

  private initWaveViewers() {
    this.width = this.svg.nativeElement.parentElement.offsetWidth;
    this.height = this.svg.nativeElement.parentElement.offsetHeight;

    this.svg.nativeElement.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);

    this.wave.nativeElement.setAttribute('width', this.width.toString());
    this.wave.nativeElement.setAttribute('height', this.height.toString());
    this.wave.nativeElement.setAttribute('x', '0');
    this.wave.nativeElement.setAttribute('fill', '#333');

    this.sliceFrom.nativeElement.setAttribute('width', '1');
    this.sliceFrom.nativeElement.setAttribute('height', this.height.toString());
    this.sliceFrom.nativeElement.setAttribute('fill', '#333');

    this.sliceTo.nativeElement.setAttribute('width', '1');
    this.sliceTo.nativeElement.setAttribute('height', this.height.toString());
    this.sliceTo.nativeElement.setAttribute('fill', '#333');

    this.waveSlice.nativeElement.setAttribute('width', this.width.toString());
    this.waveSlice.nativeElement.setAttribute('height', this.height.toString());
    this.waveSlice.nativeElement.setAttribute('x', '0');
    this.waveSlice.nativeElement.setAttribute('fill', '#00aadd');

    this.waveReaded.nativeElement.setAttribute('width', (0).toString());
    this.waveReaded.nativeElement.setAttribute('height', this.height.toString());
    this.waveReaded.nativeElement.setAttribute('x', (0).toString());
    this.waveReaded.nativeElement.setAttribute('fill', '#9d0059');
  }

  private max(values) {
    return values.reduce((max, value) => Math.max(max, value), 0);
  }

  private avg(values) {
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  }

  public getWaveformData(audioBuffer: AudioBuffer) {
    const dataPoints = this.width / this.smoothing;
    const leftChannel = audioBuffer.getChannelData(0);
    const rightChannel = audioBuffer.getChannelData(1);
    const values = new Float32Array(dataPoints);
    const dataWindow = Math.round(leftChannel.length / dataPoints);

    for (let i = 0, y = 0, buffer = []; i < leftChannel.length; i++) {
      const summedValue = (Math.abs(leftChannel[i]) + Math.abs(rightChannel[i])) / 2;
      buffer.push(summedValue);
      if (buffer.length === dataWindow) {
        values[y++] = this.avg(buffer);
        buffer = [];
      }
    }

    return values;
  }

  public getSVGPath(waveformData: Float32Array) {
    const maxValue = this.max(waveformData);
    let path = `M 0 ${this.height} `;

    for (let i = 0; i < waveformData.length; i++) {
      path += `L ${i * this.smoothing} ${(1 - waveformData[i] / maxValue) * this.height} `;
    }
    path += `V ${this.height} H 0 Z`;

    return path;
  }


  private fromPhysicalToAudioValue(value: number) {
    return this.audioBuffer.duration * value / this.width;
  }

  private fromAudioToPhysicalValue(value: number) {
    return this.width * value / this.audioBuffer.duration;
  }

  get audioSliceFrom(): number {
    return this.fromPhysicalToAudioValue(this.physicalSliceFrom);
  }

  set audioSliceFrom(value: number) {
    if (value >= 0 && value <= this.audioBuffer.duration && value < this.audioSliceTo) {
      const newFrom = this.fromAudioToPhysicalValue(value).toString();
      this.sliceFrom.nativeElement.setAttribute('x', newFrom.toString());
    }
    this.updateSlicer();
  }

  get audioSliceTo(): number {
    return this.audioBuffer.duration * this.physicalSliceTo / this.width;
  }

  set audioSliceTo(value) {
    if (value >= 0 && value <= this.audioBuffer.duration && value > this.audioSliceFrom) {
      const newTo = this.fromAudioToPhysicalValue(value);
      this.sliceTo.nativeElement.setAttribute('x', newTo.toString());
    }
    this.updateSlicer();
  }

  private updateSlicer() {
    this.waveSlice.nativeElement.setAttribute('width', (this.physicalSliceTo - this.physicalSliceFrom).toString());
    this.waveSlice.nativeElement.setAttribute('x', this.physicalSliceFrom.toString());
  }

  get physicalSliceFrom(): number {
    return parseInt(this.sliceFrom.nativeElement.getAttribute('x'), 10);
  }

  get physicalSliceTo(): number {
    return parseInt(this.sliceTo.nativeElement.getAttribute('x'), 10);
  }

  play() {
    if (this.source) {
      this.source.stop();
    }
    this.source = this.soundService.audioContext.createBufferSource();
    this.source.buffer = this.audioBuffer;
    this.source.connect(this.soundService.audioContext.destination);
    this.source.start(0, this.audioSliceFrom, this.audioSliceTo - this.audioSliceFrom);
  }

}

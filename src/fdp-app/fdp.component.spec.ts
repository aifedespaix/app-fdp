import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import { FdpAppComponent } from './fdp.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('FdpAppComponent', () => {
  let comp: FdpAppComponent;
  let fixture: ComponentFixture<FdpAppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FdpAppComponent]
    });

    fixture = TestBed.createComponent(FdpAppComponent);
    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('h1'));
    e1 = de.nativeElement;
  });

  // it('should display original title', () => {
  //   fixture.detectChanges();
  //   expect(el.textContent).toContain(comp.title);
  // });
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       FdpAppComponent,
  //       FdpHeaderComponent,
  //       FdpSlidenavComponent,
  //     ],
  //   }).compileComponents();
  // }));
  //
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(FdpAppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  //
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(FdpAppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  //
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(FdpAppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  // }));
});

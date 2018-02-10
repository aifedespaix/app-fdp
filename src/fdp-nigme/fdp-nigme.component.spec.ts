import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdpNigmeComponent } from './fdp-nigme.component';

describe('FdpNigmeComponent', () => {
  let component: FdpNigmeComponent;
  let fixture: ComponentFixture<FdpNigmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdpNigmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdpNigmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

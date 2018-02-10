import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdpBoxComponent } from './fdp-box.component';

describe('FdpNigmeComponent', () => {
  let component: FdpBoxComponent;
  let fixture: ComponentFixture<FdpBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdpBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdpBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

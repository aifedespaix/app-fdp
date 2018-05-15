import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdpLouComponent } from './fdp-nigme.component';

describe('FdpNigmeComponent', () => {
  let component: FdpLouComponent;
  let fixture: ComponentFixture<FdpLouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdpLouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdpLouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

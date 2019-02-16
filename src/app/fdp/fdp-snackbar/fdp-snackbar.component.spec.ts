import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdpSnackbarComponent } from './fdp-snackbar.component';

describe('FdpSnackbarComponent', () => {
  let component: FdpSnackbarComponent;
  let fixture: ComponentFixture<FdpSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdpSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdpSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalComponent } from './legal.component';
import {LegalModule} from './legal.module';
import {TestsModule} from '../../tests/tests.module';

describe('LegalComponent', () => {
  let component: LegalComponent;
  let fixture: ComponentFixture<LegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ LegalModule, TestsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

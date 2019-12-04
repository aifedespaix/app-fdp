import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddComponent } from './btn-add.component';
import {TestsModule} from '../../../tests/tests.module';
import {BtnModule} from '../btn.module';

describe('BtnAddComponent', () => {
  let component: BtnAddComponent;
  let fixture: ComponentFixture<BtnAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BtnModule,
        TestsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnComponent } from './learn.component';
import {LearnModule} from './learn.module';
import {AppRoutingModule} from '../../app-routing.module';
import {LayoutModule} from '../../layout/layout.module';

describe('LearnComponent', () => {
  let component: LearnComponent;
  let fixture: ComponentFixture<LearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        LearnModule,
        AppRoutingModule,
        LayoutModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

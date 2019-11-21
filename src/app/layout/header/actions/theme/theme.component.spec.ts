import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThemeComponent} from './theme.component';
import {ColorService} from '../../../../color/color.service';
import {MatIconModule, MatMenuModule} from '@angular/material';

describe('ThemeComponent', () => {
  let component: ThemeComponent;
  let fixture: ComponentFixture<ThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeComponent],
      imports: [
        MatIconModule,
        MatMenuModule,
      ],
      providers: [
        ColorService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

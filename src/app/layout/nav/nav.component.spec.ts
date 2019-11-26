import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import {MatIconModule} from '@angular/material';
import {LayoutService} from '../../services/layout.service';
import {ResponsiveService} from '../../responsive/responsive.service';
import {AppRoutingModule} from '../../app-routing.module';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      imports: [
        MatIconModule,
        AppRoutingModule,
      ],
      providers: [
        LayoutService,
        ResponsiveService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

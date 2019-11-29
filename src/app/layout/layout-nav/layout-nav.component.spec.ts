import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNavComponent } from './layout-nav.component';
import {MatIconModule} from '@angular/material';
import {LayoutService} from '../../services/layout.service';
import {ResponsiveService} from '../../responsive/responsive.service';
import {AppRoutingModule} from '../../app-routing.module';

describe('NavComponent', () => {
  let component: LayoutNavComponent;
  let fixture: ComponentFixture<LayoutNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutNavComponent ],
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
    fixture = TestBed.createComponent(LayoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

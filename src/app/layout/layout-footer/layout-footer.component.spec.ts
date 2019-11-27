import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutFooterComponent} from './layout-footer.component';
import {LayoutModule} from '../layout.module';
import {AppRoutingModule} from '../../app-routing.module';
import {InlineSVGModule} from 'ng-inline-svg';
import {HttpClientModule} from '@angular/common/http';

describe('LayoutFooterComponent', () => {
  let component: LayoutFooterComponent;
  let fixture: ComponentFixture<LayoutFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule,
        AppRoutingModule,
        InlineSVGModule,
        HttpClientModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

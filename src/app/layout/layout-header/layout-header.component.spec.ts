import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LayoutHeaderComponent} from './layout-header.component';
import {AppRoutingModule} from '../../app-routing.module';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {LayoutModule} from '../layout.module';

describe('HeaderComponent', () => {
  let component: LayoutHeaderComponent;
  let fixture: ComponentFixture<LayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule,
        AppRoutingModule,
        ApolloTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

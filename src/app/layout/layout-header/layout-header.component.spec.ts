import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LayoutHeaderComponent} from './layout-header.component';
import {LayoutService} from '../../services/layout.service';
import {ResponsiveService} from '../../responsive/responsive.service';
import {SeoHeadService} from '../../services/seo-head.service';
import {MatDialogModule, MatIconModule, MatMenuModule} from '@angular/material';
import {ActionsComponent} from './layout-header-actions/actions.component';
import {LayoutLogoComponent} from '../layout-logo/layout-logo.component';
import {ThemeComponent} from '../../components/theme/theme.component';
import {AuthComponent} from './layout-header-actions/auth/auth.component';
import {AppRoutingModule} from '../../app-routing.module';
import {AuthService} from '../../services/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {AuthModelService} from '../../model/auth/auth-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {UserModelService} from '../../model/user/user-model.service';
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
      providers: [
        CookieService,
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

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {LayoutService} from '../layout.service';
import {ResponsiveService} from '../../responsive/responsive.service';
import {SeoHeadService} from '../../seo/seo-head/seo-head.service';
import {MatDialogModule, MatIconModule, MatMenuModule} from '@angular/material';
import {ActionsComponent} from './actions/actions.component';
import {LogoComponent} from '../logo/logo.component';
import {ThemeComponent} from './actions/theme/theme.component';
import {AuthComponent} from './actions/auth/auth.component';
import {AppRoutingModule} from '../../app-routing.module';
import {AuthService} from '../../auth/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {AuthModelService} from '../../model/auth/auth-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {UserModelService} from '../../model/user/user-model.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        ActionsComponent,
        LogoComponent,
        ThemeComponent,
        AuthComponent,
      ],
      imports: [
        MatIconModule,
        MatMenuModule,
        AppRoutingModule,
        MatDialogModule,
        ApolloTestingModule,
      ],
      providers: [
        LayoutService,
        ResponsiveService,
        SeoHeadService,
        AuthService,
        AuthModelService,
        UserModelService,
        CookieService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

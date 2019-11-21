import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {ProfileModule} from './profile.module';
import {AppRoutingModule} from '../../app-routing.module';
import {MatSnackBarModule} from '@angular/material';
import {AuthModule} from '../../auth/auth.module';
import {CookieService} from 'ngx-cookie-service';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {LayoutModule} from '../../layout/layout.module';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ProfileModule,
        AppRoutingModule,
        MatSnackBarModule,
        AuthModule,
        ApolloTestingModule,
        LayoutModule,
      ],
      providers: [
        CookieService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

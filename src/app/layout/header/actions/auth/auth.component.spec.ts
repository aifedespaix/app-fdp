import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatMenuModule} from '@angular/material';
import {AuthService} from '../../../../auth/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {AuthModelService} from '../../../../model/auth/auth-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {UserModelService} from '../../../../model/user/user-model.service';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        ApolloTestingModule,
      ],
      providers: [
        AuthService,
        CookieService,
        AuthModelService,
        UserModelService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

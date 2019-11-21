import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsComponent } from './actions.component';
import {ThemeComponent} from './theme/theme.component';
import {AuthModule} from '../../../auth/auth.module';
import {MatButtonModule, MatDialogRef, MatIconModule, MatMenuModule} from '@angular/material';
import {AuthComponent} from './auth/auth.component';
import {CookieService} from 'ngx-cookie-service';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActionsComponent,
        ThemeComponent,
        AuthComponent,
      ],
      imports: [
        AuthModule,
        MatIconModule,
        MatMenuModule,
        ApolloTestingModule,
        MatButtonModule,
      ],
      providers: [
        [{
          provide: MatDialogRef,
          useValue: {},
        }],
        CookieService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

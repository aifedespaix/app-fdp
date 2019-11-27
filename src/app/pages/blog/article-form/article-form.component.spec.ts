import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFormComponent } from './article-form.component';
import {BlogModule} from '../blog.module';
import {AppRoutingModule} from '../../../app-routing.module';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '../../../layout/layout.module';

describe('ArticleFormComponent', () => {
  let component: ArticleFormComponent;
  let fixture: ComponentFixture<ArticleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BlogModule,
        AppRoutingModule,
        ApolloTestingModule,
        BrowserAnimationsModule,
        LayoutModule,
      ],
      providers: [

      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagFieldComponent } from './tag-field.component';
import {MatAutocompleteModule, MatChipsModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TagModelService} from '../../../model/tag/tag-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('TagFieldComponent', () => {
  let component: TagFieldComponent;
  let fixture: ComponentFixture<TagFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagFieldComponent ],
      imports: [
        MatChipsModule,
        MatIconModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        ApolloTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [
        TagModelService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

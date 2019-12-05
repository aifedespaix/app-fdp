import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommentFieldComponent} from './comment-field.component';
import {CommentModule} from '../comment.module';
import {TestsModule} from '../../../tests/tests.module';

describe('CommentFieldComponent', () => {
  let component: CommentFieldComponent;
  let fixture: ComponentFixture<CommentFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommentModule,
        TestsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

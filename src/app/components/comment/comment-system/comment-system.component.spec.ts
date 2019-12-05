import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommentSystemComponent} from './comment-system.component';
import {CommentModule} from '../comment.module';
import {TestsModule} from '../../../tests/tests.module';

describe('CommentSystemComponent', () => {
  let component: CommentSystemComponent;
  let fixture: ComponentFixture<CommentSystemComponent>;

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
    fixture = TestBed.createComponent(CommentSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

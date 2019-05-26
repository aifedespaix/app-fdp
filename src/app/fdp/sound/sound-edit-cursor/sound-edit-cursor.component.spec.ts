import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundEditCursorComponent } from './sound-edit-cursor.component';

describe('SoundEditCursorComponent', () => {
  let component: SoundEditCursorComponent;
  let fixture: ComponentFixture<SoundEditCursorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundEditCursorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundEditCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

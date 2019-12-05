import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MusicIndexComponent} from './music-index.component';
import {MusicModule} from '../music.module';
import {AppRoutingModule} from '../../../app-routing.module';

describe('MusicComponent', () => {
  let component: MusicIndexComponent;
  let fixture: ComponentFixture<MusicIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MusicModule,
        AppRoutingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

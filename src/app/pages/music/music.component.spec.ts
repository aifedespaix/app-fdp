import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MusicComponent} from './music.component';
import {MusicModule} from './music.module';
import {AppRoutingModule} from '../../app-routing.module';

describe('MusicComponent', () => {
  let component: MusicComponent;
  let fixture: ComponentFixture<MusicComponent>;

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
    fixture = TestBed.createComponent(MusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

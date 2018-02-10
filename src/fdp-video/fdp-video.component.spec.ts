import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FdpVideoComponent} from './fdp-video.component';
import {FdpVideoService} from "./fdp-video.service";

FdpVideoServiceStub = [{
  id: 0,
  title: '[ENQUETE SECRETE] Alency - Une ville pleine de secrets - 2018',
  description: `La ville d’Alency est mondialement réputée pour ses activités et son accessibilité au tourisme. Mais comment une telle ville peut être si attractive ? Ce reportage vous permettra d’en savoir plus sur cette ville tellement pleine de secrets ! Vous saurez tout sur cette ville aux mille merveilles. Grâce à cette enquête exclusive loin d'une zone interdite !`,
  youtubeId: 'uCEOLVIaxZI',
}];

describe('FdpVideoComponent', () => {
  let component: FdpVideoComponent;
  let fixture: ComponentFixture<FdpVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FdpVideoComponent],
      providers: [
        {
          provide: FdpVideoService, useValue: FdpVideoServiceStub
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdpVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

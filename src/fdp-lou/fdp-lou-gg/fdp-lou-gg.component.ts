import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fdp-lou-gg',
  templateUrl: './fdp-lou-gg.component.html',
  styleUrls: ['./fdp-lou-gg.component.scss'],
})
export class FdpLouGgComponent implements OnInit, OnDestroy {

  public music;

  constructor(public router: Router) {
    this.music = new Audio('/assets/images/loup/jeux/fini.mp3');
    this.music.loop = true;
    this.music.play();
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.music.pause();
  }

}

import {Component} from '@angular/core';

// Routing et balise Title
import {Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './fdp.component.html',
  styleUrls: ['./fdp.component.scss']
})

export class FdpAppComponent {
  public isSlidenavActive: Boolean;
  public titlePrefix: String = 'AifeDesPaix - ';

  constructor(private router: Router,
              private title: Title) {

    // Slidenav config
    this.isSlidenavActive = localStorage.getItem('isSlidenavActive') === 'true' || window.innerWidth > 1380;
    window.onresize = () => {
      if (window.innerWidth > 1380 && !this.isSlidenavActive) {
        this.isSlidenavActive = true;
      }
    };

    // Changement title pas routage route
    this.router.events
      .filter((event: any) => event instanceof NavigationEnd)
      .subscribe(() => { // Pour chaque changement d'url par navigation
        let root = this.router.routerState.snapshot.root;
        while (root) {
          if (root.children && root.children.length) {
            root = root.children[0];
          } else if (root.data && root.data['title']) {
            this.title.setTitle(this.titlePrefix + root.data['title']);
            return;
          } else {
            return;
          }
        }
      });
  }

  /**
   * Active ou non le menu latéral
   */
  public toggleSlidenav() {
    if (window.innerWidth < 1380 || !this.isSlidenavActive) {
      this.isSlidenavActive = !this.isSlidenavActive;
      localStorage.setItem('isSlidenavActive', String(this.isSlidenavActive));
    }
  }

}

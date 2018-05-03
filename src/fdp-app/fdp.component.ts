import {Component} from '@angular/core';
import { HostListener } from '@angular/core';

// Routing et balise Title
import {Meta, Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {FdpSoundService} from '../fdp-sound/fdp-sound.service';

@Component({
  selector: 'app-root',
  templateUrl: './fdp.component.html',
  styleUrls: ['./fdp.component.scss'],
})

export class FdpAppComponent {
  public isSlidenavActive: Boolean;
  public titlePrefix: String = 'AifeDesPaix - ';

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.onKey(event);
  }

  constructor(private router: Router,
              private title: Title,
              private meta: Meta,
              private fdpSoundService: FdpSoundService) {
    // Slidenav config
    this.isSlidenavActive = localStorage.getItem('isSlidenavActive') === 'true' || window.innerWidth > 1380;
    window.onresize = () => {
      if (window.innerWidth > 1380 && !this.isSlidenavActive) {
        this.isSlidenavActive = true;
      }
    };

    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     gtag('set', 'page', event.urlAfterRedirects);
    //     gtag('send', 'pageview');
    //   }
    // });

    this.meta.addTag({name: 'author', content: 'AifeDesPaix'});

    // Changement title pas routage route
    this.router.events
      .filter((event: any) => event instanceof NavigationEnd)
      .subscribe(() => { // Pour chaque changement d'url par navigation
        let root = this.router.routerState.snapshot.root;
        while (root) {
          if (root.children && root.children.length) {
            root = root.children[0];
          } else {
            if (root.data && root.data['title']) {
              this.title.setTitle(this.titlePrefix + root.data['title']);
            }
            if (root.data['description']) {
              this.meta.addTag({name: 'description', content: root.data['description']});
            }
            if (root.data['keyword']) {
              this.meta.addTag({name: 'keywords', content: root.data['keyword']});
            }
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


  public onKey(event: KeyboardEvent) { // without type info
    switch(event.key) {
      case "Escape":
        this.fdpSoundService.stop();
        break;
    }
  }

}

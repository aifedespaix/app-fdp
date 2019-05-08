import {Component, HostListener} from '@angular/core';
// Routing & Meta + Title
import {Meta, Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {SoundService} from '../modules/fdp/commun/sound/sound.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isSidenavActive: Boolean;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.onKey(event);
  }

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta,
    private soundService: SoundService,
  ) {
    this.isSidenavActive = localStorage.getItem('isSidenavActive') === 'active';
    this.title.setTitle('Accueil - aifedespaix');
    this.meta.updateTag({name: 'author', content: 'aifedespaix'});
    this.meta.updateTag({name: 'description', content: `Ici, t'es sur aifedespaix.com le site des aifedespaix, alors ntm mdr`});
  }

  public toggleSidenav() {
    this.isSidenavActive = !this.isSidenavActive;
    localStorage.setItem(
      'isSidenavActive',
      this.isSidenavActive ? 'active' : 'inactive',
    );
  }

  public closeSidenav() {
    if (this.isSidenavActive) {
      this.toggleSidenav();
    }
  }

  public onKey(event: KeyboardEvent) {
    // without type info
    switch (event.key) {
      case 'Escape':
        this.soundService.stop();
        break;
      case 'p':
        this.soundService.play();
        break;
    }
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  public menuItems: {};
  @Output() itemClick: EventEmitter<any> = new EventEmitter();
  @Input() isSidenavActive: Boolean;

  constructor() {
    this.menuItems = [
      {
        link: '',
        icon: 'home',
        text: 'Accueil',
        exact: true
      },
      {
        link: 'soundBox/boxes',
        icon: 'audiotrack',
        text: 'Box',
        exact: false
      },
      {
        link: 'blog',
        icon: 'chrome_reader_mode',
        text: 'Blog',
        exact: false
      },
      {
        link: 'music',
        icon: 'queue_music',
        text: 'Playlists',
        exact: false
      },
      {
        link: 'video',
        icon: 'ondemand_video',
        text: 'Vidéos',
        exact: false
      },
      {
        link: 'shop',
        icon: 'shopping_cart',
        text: 'Shop',
        exact: false
      },
      {
        link: 'game',
        icon: 'videogame_asset',
        text: 'Game',
        exact: false
      }
    ];
  }

  public itemClicked() {
    this.itemClick.emit();
  }

  public toggleSidenav() {
    this.itemClick.emit();
  }

}

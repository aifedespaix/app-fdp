import {Component} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {User} from '../user';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  public user: User;

  constructor(public authService: AuthService,
              private title: Title,
              private meta: Meta) {
    this.user = this.authService.user;
    console.log('AAAAAAAAAAAA');

    this.title.setTitle(`Profil de ${this.user.username} - aifedespaix`);
    this.meta.updateTag({
      name: 'description',
      content: `Mon profil, mes amis, y'en a plein, tout un gang de tarbas, prêt à foutre le feu !`,
    });
    this.meta.updateTag({name: 'keywords', content: `profil, mon profil, informations, détails`});

  }
}

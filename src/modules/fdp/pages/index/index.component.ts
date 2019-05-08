import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
// import { AuthService } from '../user/user-auth/user-auth.service';
// import { User } from '../user/-user';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {

  constructor(private title: Title,
              private meta: Meta) {
    this.title.setTitle('Accueil - aifedespaix');
    this.meta.updateTag({
      name: 'description',
      content: `Ici c'est un peu le site de tous les aifedespaix. Du coup t'as rien à y faire... Casses toi !`,
    });
    this.meta.updateTag({name: 'keywords', content: `accueil, aifedespaix`});
  }
}

import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  templateUrl: './notFound.component.html',
  styleUrls: ['./notFound.component.scss'],
})
export class NotFoundComponent {

  constructor(private title: Title,
              private meta: Meta) {
    this.title.setTitle('404 - aifedespaix');
    this.meta.updateTag({name: 'description', content: `Un lien mort, encore une page useless, sorry master sword`});
    this.meta.updateTag({name: 'keywords', content: `404 not found bro'`});
  }
}

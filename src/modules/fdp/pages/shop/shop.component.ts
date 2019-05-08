import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-fdp-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  constructor(private title: Title,
              private meta: Meta) {
    this.title.setTitle('Boutique - aifedespaix');
    this.meta.updateTag({name: 'description', content: `Dans la boutique, tu peux acheter un vêtement bien stylé sa mère lol`});
    this.meta.updateTag({name: 'keywords', content: `boutique, shop, tee-shirt, pull, sweat, marque, style, classe, 2018, farta`});
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Metas} from '../../../services/seo-head';
import {PageService} from '../../../services/page/page.service';

@Component({
  selector: 'app-shop-index',
  templateUrl: './shop-index.component.html',
  styleUrls: ['./shop-index.component.scss'],
})
export class ShopIndexComponent implements OnInit {

  constructor(
    private readonly pageService: PageService,
    private readonly router: Router,
  ) {
  }

  ngOnInit() {
    this.updateHead();
    this.pageService.layout();
  }

  private updateHead() {
    this.pageService.metas(
      new Metas(
        'Boutique aifedespaix, des vêtements bien cool',
        'Shop',
        // tslint:disable-next-line:max-line-length
        `Dans la boutique, tu peux acheter des vêtements bien stylé sa mère lol`,
        'aife',
        this.router.url,
      ),
    );
  }
}

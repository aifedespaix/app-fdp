import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Metas} from '../../seo/head';
import {HeadService} from '../../seo/head.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {

  constructor(
    private readonly headService: HeadService,
    private readonly router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
  }

  ngOnInit() {
    this.headService.setHead(
      new Metas(
        'Un blog pour apprendre à développer de beaux sites webs dynamiques',
        'Blog',
        // tslint:disable-next-line:max-line-length
        'Un blog technique pour apprendre plein de choses dans le domaine du web moderne. Du javascript, nodejs, typescript, tu comprendras tout !',
        'clapette',
        this.router.url,
      ),
    );
  }

}

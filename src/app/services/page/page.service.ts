import {Injectable} from '@angular/core';
import {LayoutService} from '../layout/layout.service';
import {SeoHeadService} from '../seo-head.service';
import {Metas} from '../seo-head';
import {Logo} from '../layout/logo';
import {PictureType} from '../../model/_generated/graphql.schema';

@Injectable({
  providedIn: 'root',
})
export class PageService {

  constructor(
    private readonly layoutService: LayoutService,
    private readonly seoHeadService: SeoHeadService,
  ) {
  }

  public layout(isFooterVisible: boolean = true, logo: Logo = Logo.Aifedespaix) {
    this.layoutService.footerVisibility(isFooterVisible);
    this.layoutService.logoUri = logo;
  }

  public metas(metas: Metas) {
    this.seoHeadService.setHead(metas);
  }

}

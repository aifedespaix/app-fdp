import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SeoHeadService} from './seo-head/seo-head.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    SeoHeadService,
  ],
})
export class SeoModule {
}

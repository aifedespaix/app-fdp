import { NgModule } from '@angular/core';
import {ResponsiveService} from './responsive.service';



@NgModule({
  declarations: [],
  imports: [],
  providers: [
    ResponsiveService,
    {provide: 'Window', useValue: window},
  ],
})
export class ResponsiveModule { }

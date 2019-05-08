import {NgModule} from '@angular/core';
import {PageGameComponent} from './index/game.component';
import {GameModule} from '../../../game/game.module';
import {GameRoutingModule} from './game.routing.module';

@NgModule({
  declarations: [PageGameComponent],
  exports: [PageGameComponent],
  imports: [GameModule, GameRoutingModule],
  entryComponents: [],
  providers: [],
})
export class PageGameModule {
}

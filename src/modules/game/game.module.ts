import {NgModule} from '@angular/core';
import {SceneComponent} from './scene/scene.component';
import {ModifierComponent} from './modifier/modifier';

@NgModule({
  declarations: [
    SceneComponent,
    ModifierComponent
  ],
  exports: [
    SceneComponent
  ],
  imports: [
  ],
  entryComponents: [
  ],
})
export class GameModule {
}

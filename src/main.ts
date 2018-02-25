import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {FdpModule} from './fdp-app/fdp.module';
import {environment} from './environments/environment';

if (environment.production) {
  console.log('hey');
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FdpModule)
  .then(success => console.log(`Ouèche sale fdp`))
  .catch(err => console.error(err));

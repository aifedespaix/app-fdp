# aifedespaix : app

## Angular CLI

### Generate Module
`yarn ng generate m [MODULE]`

### Generate Component
`yarn ng generate c [COMPONENT] --module=[MODULE]`

### Run Mobile
`yarn start --host 192.168.1.[XXX]`

### Update all 
`yarn ng update @angular/cli @angular/core [--all=true]`

### SSR
```typescript
import {isPlatformServer} from '@angular/common';

if (isPlatformServer(this.platformId)) {
  console.log("PALTEFORME");
} else {
  console.log("BROWSER");
}
```

import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root',
})
export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate> {

  canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {
    const warnMsg = 'Attention : Il y a des changements non sauvegardés.';
    const saveMsg = 'Appuyez sur "Annuler" et enregistrer ces changements';
    const elseMsg = 'ou "Actualiser" pour perdre ces changements';

    return component.canDeactivate() ? true : confirm(`${warnMsg}\n${saveMsg},\n${elseMsg}`);
  }

}

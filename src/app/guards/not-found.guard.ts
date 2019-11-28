import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Location} from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotFoundGuard implements CanActivate {
  constructor(
    private router: Router,
    private location: Location,
) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.router.
    // this.location.replaceState('/404');
    // this.router.replaceState(['/404'], { skipLocationChange: true , replaceUrl: true});
    return true;
  }

}

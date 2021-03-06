import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Role} from '../model/_generated/graphql.schema';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router,
  ) {
  }

  async canActivate(): Promise<boolean> {
    if (!this.authService.isAdmin) {
      await this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}

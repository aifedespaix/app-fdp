import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router,
  ) {
  }

  async canActivate(): Promise<boolean> {
    if (!this.authService.isAuthenticated) {
      await this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}

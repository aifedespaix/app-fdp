import {AuthService} from '../../pages/user/auth/auth.service';
import {AuthComponent} from '../../pages/user/auth/auth.component';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<Boolean>();
  @Input() isSidenavActived: Boolean;

  constructor(
    private route: ActivatedRoute,
    public authDialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    const prefixUrl = '../../../assets/icons/brands';
    this.matIconRegistry.addSvgIcon(`facebook`, this.domSanitizer.bypassSecurityTrustResourceUrl(`${prefixUrl}/facebook.svg`));
    // this.matIconRegistry.addSvgIcon(`instagram`, this.domSanitizer.bypassSecurityTrustResourceUrl(`${prefixUrl}/instagram.svg`));
    this.matIconRegistry.addSvgIcon(`soundcloud`, this.domSanitizer.bypassSecurityTrustResourceUrl(`${prefixUrl}/soundcloud.svg`));
    this.matIconRegistry.addSvgIcon(`twitch`, this.domSanitizer.bypassSecurityTrustResourceUrl(`${prefixUrl}/twitch.svg`));
    this.matIconRegistry.addSvgIcon(`twitter`, this.domSanitizer.bypassSecurityTrustResourceUrl(`${prefixUrl}/twitter.svg`));
    this.matIconRegistry.addSvgIcon(`youtube`, this.domSanitizer.bypassSecurityTrustResourceUrl(`${prefixUrl}/youtube.svg`));
  }

  public openDialog(): void {
    const dialogRef = this.authDialog.open(AuthComponent, {});

    dialogRef.afterClosed().subscribe();
  }

  public isLoged() {
    return this.authService.isLoged;
  }

  public pressBtnSidenav() {
    this.toggleSidenav.emit();
  }

  public logout() {
    this.authService.logout();
  }

  public logedUser() {
    return this.authService.user;
  }
}

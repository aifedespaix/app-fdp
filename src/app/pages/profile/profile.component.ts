import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Metas} from '../../services/seo-head';
import {SeoHeadService} from '../../services/seo-head.service';
import {Router} from '@angular/router';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';
import {MatSnackBar} from '@angular/material';
import {PictureType, UserEditInput, UserType} from '../../model/_generated/graphql.schema';
import {UserModelService} from '../../model/user/user-model.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public isLoading: boolean;
  public modified: boolean;
  public user: UserType;
  private readonly userEditInput: UserEditInput;

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly authService: AuthService,
    private readonly headService: SeoHeadService,
    private readonly router: Router,
    private readonly userModelService: UserModelService,
  ) {
    this.userEditInput = new UserEditInput();
    this.isLoading = false;
    this.modified = false;
    this.user = null;
  }

  ngOnInit() {
    this.headService.setHead(
      new Metas(
        `Profil`,
        `Profil`,
        'Mon profil',
        this.user ? this.user.login : 'clapette',
        this.router.url,
      ),
    );

    this.userModelService
      .completeProfile()
      .subscribe((user) => {
        this.user = user;
        console.log(this.user);
      });
  }

  public save() {
    const sub = this.authService.updateProfile(this.userEditInput)
      .subscribe(
        () => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: {
              icon: 'success',
              color: '',
              message: `Votre profil est à jour !`,
            },
          });
        },
        () => {

          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: {
              icon: 'error',
              color: '',
              message: `Erreur, impossible de sauvegarder les modifications`,
            },
          });
        },
        () => {
          this.modified = false;
          sub.unsubscribe();
        },
      );
  }

  public updateAvatar(avatar: PictureType) {
    this.userEditInput.avatarId = avatar.id;
    this.user.avatar = avatar;
    this.modified = true;
  }
}

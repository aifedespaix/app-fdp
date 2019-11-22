import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Metas} from '../../seo/seo-head/seo-head';
import {SeoHeadService} from '../../seo/seo-head/seo-head.service';
import {Router} from '@angular/router';
import {UserModelService} from '../../model/user/user-model.service';
import {ResourceService} from '../../model/resource/resource.service';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';
import {MatSnackBar} from '@angular/material';
import {UserEditInput} from '../../model/_generated/graphql.schema';
import {getAvatarMock} from '../../model/resource/tests/resource.mock';
import {PictureModelService} from '../../model/picture/picture-model.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public isLoading: boolean;
  public modified: boolean;
  private readonly userEditInput: UserEditInput;

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly authService: AuthService,
    private readonly headService: SeoHeadService,
    private readonly router: Router,
    private readonly userModelService: UserModelService,
    private readonly pictureModelService: PictureModelService,
  ) {
    this.userEditInput = new UserEditInput();
    this.isLoading = false;
    this.modified = false;
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
  }

  get user() {
    return this.authService.user;
  }

  get avatar() {
    return this.user && this.user.avatar ? this.user.avatar : getAvatarMock();
  }

  public onFileChange({target: {validity, files: [file]}}: any) {
    this.isLoading = true;
    const sub = this.pictureModelService.createPicture({title: `Avatar de ${this.user.login}`, description: ''}, file)
      .subscribe((res) => {
          this.user.avatar = res;
          this.userEditInput.avatarId = res.id;
          this.isLoading = false;
          this.modified = true;
        },
        (error) => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: {
              icon: 'error',
              color: '',
              message: `Erreur, impossible de changer l'avatar, reessayez plus tard`,
            },
          });
        },
        () => {
          sub.unsubscribe();
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

}

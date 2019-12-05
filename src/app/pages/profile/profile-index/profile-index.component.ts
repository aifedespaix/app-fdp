import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Metas} from '../../../services/seo-head';
import {SeoHeadService} from '../../../services/seo-head.service';
import {Router} from '@angular/router';
import {PictureType, UserEditInput, UserType} from '../../../model/_generated/graphql.schema';
import {UserModelService} from '../../../model/user/user-model.service';
import {SnackService} from '../../../services/snack/snack.service';

@Component({
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.scss'],
})
export class ProfileIndexComponent implements OnInit {

  public isLoading: boolean;
  public modified: boolean;
  public user: UserType;
  private readonly userEditInput: UserEditInput;

  constructor(
    private readonly snackService: SnackService,
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
      });
  }

  public save() {
    const sub = this.authService.updateProfile(this.userEditInput)
      .subscribe(
        () => {
          this.snackService.success(`Votre profil est à jour !`);
          this.modified = false;
          sub.unsubscribe();
        },
        () => {
          this.snackService.error(`Impossible de sauvegarder les modifications.`);
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

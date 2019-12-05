import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentType} from '../../../model/_generated/graphql.schema';
import {AuthService} from '../../../services/auth.service';
import {CommentModelService} from '../../../model/comment/comment-model.service';
import {SnackService} from '../../../services/snack/snack.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

  @Input() comment: CommentType;
  @Output() deleted: EventEmitter<string>;
  public editMode: boolean;

  constructor(
    private readonly authService: AuthService,
    private readonly commentModelService: CommentModelService,
    private readonly snackService: SnackService,
  ) {
    this.deleted = new EventEmitter<string>();
    this.editMode = false;
  }

  ngOnInit() {

  }

  public isOwner() {
    return this.authService.isAdmin || (this.authService.isAuthenticated && this.authService.user.id === this.comment.author.id);
  }

  public delete() {
    const sub = this.commentModelService
      .deleteComment(this.comment.id)
      .subscribe(() => {
          this.deleted.emit(this.comment.id);
          this.snackService.success('Le message a bien été supprimé.');
          sub.unsubscribe();
        },
        () => {
          this.snackService.error(`Vous n'êtes pas autorisé à supprimer ce message.`);
          sub.unsubscribe();
        });
  }

  public update(value: string) {
    const sub = this.commentModelService
      .updateComment({id: this.comment.id, value})
      .subscribe(
        (comment) => {
          this.editMode = false;
          this.comment = comment;
          this.snackService.success('Le message a bien été mis à jour.');
          sub.unsubscribe();
        },
        () => {
          this.editMode = false;
          this.snackService.error(`Vous n'êtes pas autorisé à modifier ce message.`);
          sub.unsubscribe();
        },
      );
  }
}

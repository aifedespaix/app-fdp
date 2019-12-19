import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BoxType} from '../../../model/_generated/graphql.schema';
import {BoxModelService} from '../../../model/box/box-model.service';
import {CommentModelService} from '../../../model/comment/comment-model.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.scss'],
})
export class BoxDetailComponent implements OnInit, OnChanges {

  @Input() box: BoxType;
  public showComments: boolean;

  constructor(
    private readonly boxModelService: BoxModelService,
    private readonly commentModelService: CommentModelService,
    private readonly authService: AuthService,
  ) {
    this.showComments = false;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.box.previousValue && changes.box.previousValue.id !== changes.box.currentValue.id) {
      this.showComments = false;
    }
  }

  addComment(value: string) {
    this.commentModelService
      .createBoxComment({value, target: this.box.id})
      .subscribe((comment) => {
        this.box.comments.push(comment);
      });
  }

  canEdit() {
    return (this.authService.user && this.box.author.id === this.authService.user.id) || this.authService.isAdmin;
  }
}

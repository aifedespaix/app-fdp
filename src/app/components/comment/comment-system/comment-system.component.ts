import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentType} from '../../../model/_generated/graphql.schema';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-comment-system',
  templateUrl: './comment-system.component.html',
  styleUrls: ['./comment-system.component.scss'],
})
export class CommentSystemComponent implements OnInit {

  @Output() newComment: EventEmitter<string>;
  @Input() comments: CommentType[];
  @Input() canHide: boolean;
  @Input() show: boolean;
  @Input() label: string;

  constructor(
    public readonly authService: AuthService,
  ) {
    this.newComment = new EventEmitter<string>();
    this.comments = [];
    this.show = true;
    this.canHide = false;
  }

  ngOnInit() {
  }

  public emitNewComment(comment: string) {
    this.show = true;
    this.newComment.emit(comment);
  }

  public remove(id: string) {
    this.comments = this.comments.filter((e) => e.id !== id);
  }
}

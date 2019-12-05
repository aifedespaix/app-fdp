import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comment-field',
  templateUrl: './comment-field.component.html',
  styleUrls: ['./comment-field.component.scss'],
})
export class CommentFieldComponent implements OnInit {

  @Output() newComment: EventEmitter<string>;
  @Input() comment: string;

  constructor() {
    this.newComment = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  public submitComment() {
    this.newComment.emit(this.comment);
    return false;
  }
}

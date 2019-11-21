import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {AuthDialogComponent} from '../../../auth/auth-dialog/auth-dialog.component';
import {MatDialog} from '@angular/material';
import {PictureDialogComponent} from '../../picture/picture-modale/picture-dialog.component';

@Component({
  selector: 'app-markdown-edit',
  templateUrl: './markdown-edit.component.html',
  styleUrls: ['./markdown-edit.component.scss'],
})
export class MarkdownEditComponent implements OnInit, AfterContentInit {

  public content: string;
  @Input() targetArea: any;
  @ContentChild('area', {static: false}) private textArea: ElementRef<HTMLTextAreaElement>;

  constructor(
    private readonly pictureDialog: MatDialog,
  ) {
    this.content = '';
  }

  ngAfterContentInit(): void {
  }

  ngOnInit() {
  }

  public addTitle(level: number) {
    let title = '';
    for (let i = 0; i < level; i++) {
      title += '#';
    }
    this.placeText(`${title} `, '');
  }

  public addLink() {
    this.placeText(`[`, ']: URL');
  }

  public addImage() {
    this.pictureDialog.open(PictureDialogComponent);
    this.placeText(`![alt text](URL "`, '")');
  }

  public addCode() {
    this.placeText('\`\`\`js\n', '\n\`\`\`');
  }

  private placeText(txtBefore: string, txtAfter: string) {
    const start = this.textArea.nativeElement.selectionStart;
    const end = this.textArea.nativeElement.selectionEnd;
    const text = this.textArea.nativeElement.value;
    const before = text.substring(0, start);
    const inner = text.substring(start, end);
    const after = text.substring(end, text.length);

    this.textArea.nativeElement.value = (before + txtBefore + inner + txtAfter + after);

    this.textArea.nativeElement.selectionStart = before.length + txtBefore.length;
    this.textArea.nativeElement.selectionEnd = this.textArea.nativeElement.selectionStart + inner.length;
    this.textArea.nativeElement.focus();
    this.textArea.nativeElement.dispatchEvent(new Event('change'));
  }
}

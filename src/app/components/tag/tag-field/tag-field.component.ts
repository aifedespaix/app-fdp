import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/typings/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {TagModelService} from '../../../model/tag/tag-model.service';

@Component({
  selector: 'app-tag-field',
  templateUrl: './tag-field.component.html',
  styleUrls: ['./tag-field.component.scss'],
})
export class TagFieldComponent implements OnInit {
  public removable: boolean;
  public selectable: boolean;
  public tagsCtrl: FormControl;
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public addOnBlur: true;
  public filteredTags: Observable<string[]>;
  public tags: string[] = ['angular'];
  public allTags: string[];

  @ViewChild('tagInput', {static: false}) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  constructor(
    private readonly tagModelService: TagModelService,
  ) {
    this.tagsCtrl = new FormControl();
    this.allTags = [];
  }

  ngOnInit() {
    const subTag = this.tagModelService.tags({}).subscribe(
      (tags) => {
        this.allTags = tags;
      },
      () => {
      },
      () => {
        subTag.unsubscribe();
      },
    );
    this.filteredTags = this.tagsCtrl
      .valueChanges
      .pipe(
        startWith(null),
        map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()),
      );
  }

  remove(tag: string) {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }

  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagsCtrl.setValue(null);
  }

  add(event: MatChipInputEvent) {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.tags.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.tagsCtrl.setValue(null);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}

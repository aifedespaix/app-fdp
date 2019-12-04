import {Component, ElementRef, forwardRef, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/typings/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {TagModelService} from '../../../model/tag/tag-model.service';
import {TagInput} from '../../../model/_generated/graphql.schema';

@Component({
  selector: 'app-tag-field',
  templateUrl: './tag-field.component.html',
  styleUrls: ['./tag-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagFieldComponent),
      multi: true,
    },
  ],
})
export class TagFieldComponent implements OnInit, ControlValueAccessor {
  public removable: boolean;
  public selectable: boolean;
  public tagsCtrl: FormControl;
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public addOnBlur: true;
  public filteredTags: Observable<string[]>;
  public tags: string[] = [];
  public allTags: string[];

  @ViewChild('tagInput', {static: false}) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  private onChange: (newValue: TagInput[]) => void;

  constructor(
    private readonly tagModelService: TagModelService,
  ) {
    this.tagsCtrl = new FormControl();
    this.allTags = [];
  }

  ngOnInit() {
    const subTag = this.tagModelService.tags({})
      .subscribe(
        (tags) => {
          this.allTags = tags;
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

  registerOnChange(fn: (newValue: TagInput[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

  remove(tag: string) {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
    this.change();
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

      if ((value || '').trim()) {
        this.tags.push(value.trim());
      }

      if (input) {
        input.value = '';
      }

      this.tagsCtrl.setValue(null);
      this.change();
    }
  }

  private change() {
    this.onChange(this.tags.map((tag) => {
      return {value: tag};
    }));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}

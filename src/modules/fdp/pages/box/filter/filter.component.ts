import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BoxService} from '../box.service';
import {Box} from '../box';

@Component({
  selector: 'app-box-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() private filtered = new EventEmitter<string>();
  public filter: string;
  private _filterResults: Box[];

  constructor(private boxService: BoxService) {
    this.filter = '';
    this._filterResults = [];
  }

  ngOnInit(): void {
    this.updateFilterResults();
  }

  public updateFilterResults() {
    this.boxService.queryFilter(this.filter).subscribe(({data}) => {
      this._filterResults = data.boxes;
    });
  }

  public onSubmit() {
    this.filtered.emit(this.filter);
  }

  public isListActive() {
    return this.boxService.listActive;
  }

  get filterResults() {
    return this._filterResults;
  }
}

import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {BoxService} from '../../box.service';
import {Box} from '../../box';
import {uniqBy} from 'lodash';

@Component({
  selector: 'app-box-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  @Input() filter: string;
  @ViewChild('scrollableList') scrollableList: ElementRef;

  public isLoading: boolean;
  public error: string;
  public canLoadMore: boolean;
  public page: number;
  public boxes: Box[];

  private perPage: number;

  constructor(private boxService: BoxService) {
    this.error = '';
    this.filter = '';
    this.perPage = 50;
    this.boxes = [];
  }

  ngOnInit() {
    if (this.boxes.length === 0) {
      this.resetList();
    }
  }

  public resetList() {
    this.boxes = [];
    this.canLoadMore = true;
    this.loadPages(true);
    this.boxService.listActive = true;
  }

  ngOnDestroy(): void {
    this.boxService.listActive = false;
  }

  public isResults() {
    return this.boxes.length > 0;
  }

  public onScroll() {
    if (!this.isLoading && (this.scrollableList.nativeElement.scrollHeight - (this.scrollableList.nativeElement.offsetHeight + this.scrollableList.nativeElement.scrollTop) < 200)) {
      this.page++;
      this.loadPages();
    }
  }

  public loadPages(start: Boolean = false) {
    if (start) {
      this.page = 0;
    }
    this.loadPage();
  }

  /**
   * Charge une page d'éléments
   * Charge en boucle si on peut pas scroll
   * Vide le filtre si pas assez de résultats
   */
  private loadPage() {
    if (this.canLoadMore) {
      this.isLoading = true;
      // On récupère les box
      this.boxService.loadBoxes(this.filter, {page: this.page, perPage: this.perPage}).subscribe((boxes) => {
          // On ajoute les pages chargées
          this.boxes = this.boxes.concat(boxes);

          // Si la liste est scrollable, on s'arrête
          if (this.isListScrollable()) {
            this.isLoading = false;
            this.boxes = uniqBy(this.boxes, (e) => e.id); // Nettoyage doublons
            return;
          }

          // Si y'a un filtre mais on à pas le max de résultats : on enlève le filtre
          if (this.filter !== '' && boxes.length < this.perPage) {
            this.filter = '';
            this.page = 0;
            this.loadPage();
            return;
          }

          // Liste pas scrollable
          // Si résultats possibles on charge plus
          if (boxes.length === this.perPage) {
            this.page++;
            this.loadPage();

          } else { // Si plus de resultats
            if (this.filter === '') { // Si y'a un filtre
              this.canLoadMore = false;
              this.isLoading = false;
            } else if (this.filter !== '') {
              this.filter = '';
              this.page = 0;
              this.loadPage();
            }
          }

        },
        (/*error*/) => {
          this.error = `C'est en maintenance, reviens plus tard mdr`;
          this.isLoading = false;
        },
      );
    } else {
      this.isLoading = false;
      this.boxes = uniqBy(this.boxes, (e) => e.id); // Nettoyage doublons
    }
  }

  private isListScrollable() {
    return this.scrollableList.nativeElement.scrollHeight - 200 > this.scrollableList.nativeElement.clientHeight;
  }

}

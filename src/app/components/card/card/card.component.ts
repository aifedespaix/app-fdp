import {Component, HostBinding, OnInit} from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @HostBinding('class.card') isCard: boolean;

  ngOnInit() {
    this.isCard = true;
  }
}

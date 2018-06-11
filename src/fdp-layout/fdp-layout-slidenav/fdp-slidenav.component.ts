import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-fdp-slidenav",
  templateUrl: "./fdp-slidenav.component.html",
  styleUrls: ["./fdp-slidenav.component.scss"]
})
export class FdpSlidenavComponent {
  public menuItems: {};
  @Output() onItemClick: EventEmitter<any> = new EventEmitter();
  @Input() isSlidenavActive: Boolean;

  constructor() {
    this.menuItems = [
      {
        link: "",
        icon: "home",
        text: "Accueil",
        exact: true
      },
      {
        link: "box",
        icon: "audiotrack",
        text: "Box",
        exact: false
      },
      {
        link: "galerie",
        icon: "photo",
        text: "Galerie",
        exact: false
      },
      {
        link: "blog",
        icon: "chrome_reader_mode",
        text: "Blog",
        exact: false
      },
      {
        link: "music",
        icon: "queue_music",
        text: "Playlists",
        exact: false
      },
      {
        link: "video",
        icon: "ondemand_video",
        text: "Vidéos",
        exact: false
      }
    ];
  }

  /**
   * Element
   */
  public itemClicked() {
    this.onItemClick.emit();
  }

  public toggleSlidenav() {
    this.onItemClick.emit();
  }
}

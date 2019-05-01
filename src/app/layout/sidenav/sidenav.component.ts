import {Component, EventEmitter, Inject, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Menu} from '../../graphql.schema';
import {LayoutService} from '../layout.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  @Output() close = new EventEmitter();
  public menu: Menu;
  public activeRoute: string;

  constructor(
    private readonly layoutService: LayoutService,
    private readonly router: Router,
    @Inject(PLATFORM_ID) private readonly platformId: Object) {

    this.menu = new Menu();

    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(route => {
      this.activeRoute = (route as any).url;
    });

  }

  ngOnInit() {
    const mainMenuSub = this.layoutService.mainMenu()
      .subscribe((res: any) => {
        this.menu = res.data.menu;
      }, (err) => {
        console.log(err);
      }, () => {
        mainMenuSub.unsubscribe();
      });
  }
}

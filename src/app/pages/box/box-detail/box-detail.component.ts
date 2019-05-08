import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Box} from '../../../graphql.schema';
import {HeadService} from '../../../layout/head/head.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BoxService} from '../box.service';
import {BoxListComponent} from '../box-list/box-list.component';
import {ApolloQueryResult} from 'apollo-client';

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.scss'],
})
export class BoxDetailComponent implements OnInit, OnDestroy {
  @ViewChild(BoxListComponent) listComponent: BoxListComponent;
  public boxSub;
  @Input() public box: Box;

  constructor(
    private headService: HeadService,
    private route: ActivatedRoute,
    private router: Router,
    private boxService: BoxService,
  ) {
    this.headService.description = `Une box bien stylay xD`;
    this.headService.keywords = `box, sound, soundbox, écoute, clic, sons, phrase, drôle, film`;
    this.box = null;
  }

  ngOnInit() {
    this.boxSub = this.route.params.subscribe(params => {
      const id = params['id'];

      this.boxService.getBox(id).subscribe(({data}: ApolloQueryResult<{ box: Box }>) => {
        this.box = data.box;
        this.headService.title = `Sound Box : ${this.box.name} - aifedespaix`;
        if (this.box.author) {
          this.headService.description =
            `aifedesbox : Box de ${this.box.author ? this.box.author.name : 'Anonyme'} : ${this.box.description}`;
        }
        // this.headService.keywords = `box, ${box.tags}`;

        // if (this.box !== null) {
        //   this.listComponent.filter = title;
        //   this.listComponent.resetList();
        // }

        this.addFacebookTags();
      });

    });
  }

  ngOnDestroy() {
    this.boxSub.unsubscribe();
    this.headService.removeFacebookTags();
  }

  addFacebookTags() {
    this.headService.fbApp_id = '182305972365278';
    this.headService.ogType = 'article';
    this.headService.ogUrl = `https://aifedespaix.com${this.router.url}`;
    this.headService.ogTitle = this.box.name;
    this.headService.ogImage = this.box.thumbnail.url;
    this.headService.ogDescription = this.box.description;
  }

}

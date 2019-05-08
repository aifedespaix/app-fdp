import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BoxService} from '../box.service';
import {Box} from '../box';
import {SoundService} from '../../../commun/sound/sound.service';
import {Meta, Title} from '@angular/platform-browser';
import {ListComponent} from '../list/index/list.component';

@Component({
  selector: 'app-box',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  @ViewChild(ListComponent) listComponent: ListComponent;
  public boxSub;
  public box: Box;

  constructor(
    private route: ActivatedRoute,
    private boxService: BoxService,
    private soundService: SoundService,
    private router: Router,
    private title: Title,
    private meta: Meta,
  ) {
    this.title.setTitle(`Box - aifedespaix`);
    this.meta.updateTag({
      name: 'description',
      content: `Une box bien stylay xD`,
    });
    this.meta.updateTag({name: 'keywords', content: `box, sound, soundbox, écoute, clic, sons, phrase, drôle, film`});
    this.box = null;
  }

  ngOnInit() {
    this.boxSub = this.route.params.subscribe(params => {
      const id = params['id'];
      const title = params['title'];

      this.title.setTitle(`Sound Box : ${title} - aifedespaix`);

      this.boxService.getBox(id).subscribe((box) => {
        this.meta.updateTag({
          name: 'description',
          content: `Box de ${box.owner.username} : ${box.description}`,
        });
        this.meta.updateTag({name: 'keywords', content: `box, ${box.tags}`});

        if (this.box !== null) {
          this.listComponent.filter = title;
          this.listComponent.resetList();
        }
        this.box = box;

        this.addFacebookTags();
      });

    });
  }

  ngOnDestroy() {
    this.boxSub.unsubscribe();
    this.removeFacebookTags();
  }

  addFacebookTags() {
    this.meta.updateTag({property: 'fb:app_id', content: '182305972365278'});
    this.meta.updateTag({property: 'og:type', content: 'article'});
    this.meta.updateTag({property: 'og:url', content: `https://aifedespaix.com${this.router.url}`});
    this.meta.updateTag({property: 'og:title', content: this.box.title});
    this.meta.updateTag({property: 'og:image', content: this.box.miniature.url});
    this.meta.updateTag({property: 'og:description', content: this.box.description});
  }

  removeFacebookTags() {
    this.meta.removeTag('property="fb:app_id"');
    this.meta.removeTag('property="og:type"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:description"');
  }

}

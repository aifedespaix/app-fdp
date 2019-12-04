import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BoxType} from '../../model/_generated/graphql.schema';
import {BoxModelService} from '../../model/box/box-model.service';
import {SoundService} from '../../components/sound/sound.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SeoHeadService} from '../../services/seo-head.service';
import {Metas} from '../../services/seo-head';
import {Subscription} from 'rxjs';
import {LayoutService} from '../../services/layout.service';
import {getBoxesMock} from '../../model/box/tests/box.mocks';
import {BoxDetailComponent} from '../../components/box/box-detail/box-detail.component';

/** todo
 * a revoir car on change tout et on change dynamiquement la box actuelle (en ram) plutot que de requeter l'api
 * ça oblige à charger les commentaires et tout le bordel de chaque box alors que l'on ne l'affiche pas
 * (si modification => update également la requete dans le model (boxes))
 */
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit, OnDestroy {

  public actualBox: BoxType;
  public $actualBox: Subscription;
  public isLoadingBox: boolean;

  public boxes: BoxType[];
  public $boxes: Subscription;
  public isLoadingBoxes: boolean;

  @ViewChild('detail', { static: true }) public boxDetailComponent: BoxDetailComponent;

  constructor(
    private readonly router: Router,
    private readonly seoHeadService: SeoHeadService,
    private readonly route: ActivatedRoute,
    private readonly layoutService: LayoutService,
    private readonly boxModelService: BoxModelService,
    private readonly soundService: SoundService,
  ) {
    layoutService.footerVisibility(false);
  }

  ngOnInit() {
    this.loadBoxes();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadBox(id);
    } else {
      this.updateHead(null);
    }
  }

  ngOnDestroy(): void {
    this.$boxes.unsubscribe();
    if (this.$actualBox) {
      this.$actualBox.unsubscribe();
    }
    this.layoutService.footerVisibility(true);
  }


  public play(box: BoxType) {
    if (this.actualBox !== box) {
      this.actualBox = box;
    }
    this.soundService.load(box.sound, box.title);
    this.soundService.play();
  }

  private loadBoxes() {
    this.isLoadingBoxes = true;
    this.$boxes = this.boxModelService
      .boxes({first: 20})
      .subscribe((boxes) => {
          this.boxes = boxes;
          this.boxes = this.boxes.concat(getBoxesMock());
          this.isLoadingBoxes = false;
        },
        (e) => {
          this.isLoadingBoxes = false;
        },
      );
  }

  private updateHead(box: BoxType) {
    this.seoHeadService.setHead(
      new Metas(
        box ? box.title : 'Des Sound Box à partager avec tous les fdp de ta région',
        'Box',
        // tslint:disable-next-line:max-line-length
        box ? box.description : `Tu cliques, t'écoutes, ça fait du bruit, t'es content(e) et tu fermes ta gueule poto`,
        box ? box.author.login : 'clapette',
        this.router.url,
      ),
    );
  }

  private loadBox(id: string) {
    this.isLoadingBox = true;
    this.$actualBox = this.boxModelService
      .box(id)
      .subscribe(async (box) => {
          const url = this.router.serializeUrl(this.router.createUrlTree(['/box', box.id, box.title]));
          if (this.router.url !== url) {
            await this.router.navigateByUrl(url);
          }
          this.actualBox = box;
          this.updateHead(box);
          this.isLoadingBox = false;
        },
        async () => {
          await this.router.navigateByUrl('/404');
          this.isLoadingBox = false;
        },
      );
  }
}

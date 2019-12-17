import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BoxType} from '../../../model/_generated/graphql.schema';
import {BoxModelService} from '../../../model/box/box-model.service';
import {SoundService} from '../../../services/sound/sound.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Metas, OgImage} from '../../../services/seo-head';
import {Subscription} from 'rxjs';
import {getBoxesMock} from '../../../model/box/box.mocks';
import {BoxDetailComponent} from '../../../components/box/box-detail/box-detail.component';
import {PageService} from '../../../services/page/page.service';

/** todo
 * a revoir car on charge tout et on change dynamiquement la box actuelle (en ram) plutot que de requeter l'api
 * ça oblige à charger les commentaires et tout le bordel de chaque box alors que l'on ne l'affiche pas
 * (si modification => update également la requete dans le model (boxes))
 */
@Component({
  templateUrl: './sound-box-index.component.html',
  styleUrls: ['./sound-box-index.component.scss'],
})
export class SoundBoxIndexComponent implements OnInit, OnDestroy {

  public actualBox: BoxType;
  public $actualBox: Subscription;
  public isLoadingBox: boolean;

  public boxes: BoxType[];
  public $boxes: Subscription;
  public isLoadingBoxes: boolean;

  @ViewChild('detail', {static: true}) public boxDetailComponent: BoxDetailComponent;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly pageService: PageService,
    private readonly boxModelService: BoxModelService,
    private readonly soundService: SoundService,
  ) {
    pageService.layout(false);
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
  }


  public play(box: BoxType) {
    if (this.actualBox !== box) {
      this.actualBox = box;
    }
    this.soundService.load(box.sound, box.title);
    this.soundService.play();
  }

  public fetchMore() {
    this.boxModelService.moreBoxes({first: 10, skip: this.boxes.length});
  }

  private loadBoxes() {
    this.isLoadingBoxes = true;
    this.$boxes = this.boxModelService
      .boxes({first: 20})
      .subscribe((boxes) => {
          this.boxes = boxes;
          this.isLoadingBoxes = false;
        },
        (e) => {
          this.boxes = getBoxesMock();
          this.isLoadingBoxes = false;
        },
      );
  }

  private updateHead(box: BoxType) {
    this.pageService.metas(
      new Metas(
        box ? box.title : 'Des Sound Box à partager avec tous les fdp de ta région',
        'Box',
        box ? box.description : `Tu cliques, t'écoutes, ça fait du bruit, t'es content(e) et tu fermes ta gueule poto`,
        box ? box.author.login : 'clapette',
        this.router.url,
        box ? OgImage.fromPicture(box.thumbnail) : undefined,
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

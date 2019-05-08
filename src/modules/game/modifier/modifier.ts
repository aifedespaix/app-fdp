import {Component, Input} from '@angular/core';
import {SceneService} from '../scene/scene.service';

@Component({
    selector: 'modifier',
    templateUrl: 'modifier.html',
    providers: [SceneService]
})
export class ModifierComponent {
    public scale: number = 1;

    constructor(private _SceneService: SceneService) {
    }

    @Input()
    public set container(value: HTMLElement) {
        if (value)
            this._SceneService.init(value);
    }

    public addStars(stars: number) {
        this._SceneService.addStars(stars);
    }

    public updateScale(newScale: number) {
        this._SceneService.updateScale(newScale);
    }
}

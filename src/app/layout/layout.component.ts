import { Component, Inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector     : 'layout',
    templateUrl  : './layout.component.html',
    styleUrls    : ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {

    constructor(
        private _activatedRoute: ActivatedRoute,
        @Inject(DOCUMENT) private _document: any,
        private _renderer2: Renderer2,
        private _router: Router,
    ) {}
}

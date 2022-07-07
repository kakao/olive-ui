import {
    ChangeDetectionStrategy,
    Component,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewEncapsulation
} from "@angular/core";

@Component({
    selector       : 'olive-horizontal-navigation',
    templateUrl    : './horizontal.component.html',
    styleUrls      : ['./horizontal.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'oliveHorizontalNavigation'
})
export class OliveHorizontalNavigationComponent implements OnChanges, OnInit, OnDestroy {

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void {
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
    }

    /**
     * On init
     */
    ngOnInit(): void {
    }

}

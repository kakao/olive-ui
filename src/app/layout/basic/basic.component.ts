import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'basic-layout',
    templateUrl  : './basic.component.html',
    encapsulation: ViewEncapsulation.None
})
export class BasicLayoutComponent {
    isScreenSmall: boolean;

}

import { Component, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { OlvBoxType } from './box.type';
import { OlvIconType } from "../icon/icon.type";


@Component({
    selector: 'olv-box, div[olv-box]',
    templateUrl: 'box.component.html'
})
export class OlvBoxComponent implements OnInit {
    @Input() olvBoxType: OlvBoxType;
    @Input() olvBoxContentType;
    @Input() olvBoxStrongContentType;
    @Input() olvIcon: OlvIconType = null;
    @Input() olvMessage: string;
    @Input() olvMessageTmpl: TemplateRef<any>;
    @Input() olvContentMessage: TemplateRef<any>;
    @Input() olvCloseable;

@HostBinding('class') get classList(): any{
    return {
        'olv-box-basic': this.olvBoxType === 'basic',
        'olv-box-desc': this.olvBoxType === 'desc',
        'olv-box-info': this.olvBoxType === 'info',
        'olv-box-error': this.olvBoxType === 'error',
        'olv-box-strong-basic': this.olvBoxType === 'strong-basic',
        'olv-box-strong-error': this.olvBoxType === 'strong-error',
        'olv-box-strong-info': this.olvBoxType === 'strong-info',
    }
}

    ngOnInit(): void
    {}


}


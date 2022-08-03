import { Component, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { OlvFooterType } from './footer.type';


@Component({
    selector: 'olv-footer, div[olv-footer]',
    templateUrl: 'footer.component.html'
})
export class OlvFooterComponent implements OnInit {
    @Input() olvFooterType: OlvFooterType = 'basic';
    @Input() olvContentMessage: TemplateRef<any>;
    @Input() olvExtraMessage: TemplateRef<any>;

@HostBinding('class') get classList(): any{
    return {
        'custom': this.olvFooterType === 'custom',
    }
}

    ngOnInit(): void
    {}


}


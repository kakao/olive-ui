import { Component } from '@angular/core';
import { ClipboardService } from "ngx-clipboard";

@Component({
    selector: 'component-icon-image',
    templateUrl: './iconImage.component.html'
})
export class IconImageComponent {
    public isShown: boolean = false;

    Basic ="<olv-icon olvIcon=\"Check\"></olv-icon>";

    constructor(
        private clipboardService: ClipboardService
    ) {}

    copyCode(text){
        let copyCode = "<olv-icon olvIcon=\""+text+"\"></olv-icon>"
        this.clipboardService.copyFromContent(copyCode);
        alert('code copied!')
    }

    showArea(){
        this.isShown = !this.isShown;
    }
}

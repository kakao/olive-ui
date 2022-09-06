import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {CodeShowIcon ,CodeCopyIcon} from 'app/shared/icon/Icon.svg'

@Component({
    selector: 'component-box-type',
    templateUrl: './type.component.html'
})
export class TypeComponent {

    public isShown: boolean = false;
    public isStrongShown: boolean = false;

    basic ="<olv-box olvBoxType='basic'\n" +
    "   olvMessage='가장 기본적으로 사용. 여러 리스트를 그룹핑 하거나 본문보다 구분 및 강조가 필요한 경우에 사용. 여러 컴포넌트와 조합 가능'></olv-box>\n" +
    "<olv-box olvBoxType='info'\n" +
    "   olvMessage='일련의 히스토리를 안내하거나, 중요도가 낮은 안내사항의 경우 사용'\n" +
    "   olvIcon='icon-check'>\n" +
    "</olv-box>\n" +
    "<olv-box olvBoxType='error'\n" +
    "   olvMessage='페이지의 상/하단에서 사용자에게 필수적으로 전달해야 할 안내사항이 있을 때 사용. Green보다 더 강조 및 경고의 정도가 큼'\n" +
    "   olvIcon='icon-error'\n" +
    "   olvCloseable='true'>\n" +
    "</olv-box>\n" +
    "<olv-box olvBoxType='desc'\n" +
    "   olvMessage='일련의 히스토리를 안내하거나, 중요도가 낮은 안내사항의 경우 사용'>\n" +
    "</olv-box>";

    strongBasic ="<olv-box olvBoxType='strong-basic'\n" +
    "   olvMessage='해결된 항목에 대한 그룹핑 기본상태(Ex. Scan > Components > Resolved Issue)'></olv-box>\n" +
    "<olv-box olvBoxType='strong-error'\n" +
    "   olvMessage='미해결 이슈, 오류 또는 경고 항목 등에 대한 그룹핑 Hover / Press 상태'></olv-box>\n" +
    "<olv-box olvBoxType='strong-info'\n" +
    "   olvMessage='고지문 안내 사항 등 중요한 내용의 강조 등에 사용하며, 단독으로 사용(Scan > Report > 고지문 에서만 사용됨)'></olv-box>";

    constructor(
        private clipboardService: ClipboardService,
        private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer

    ) {
        iconRegistry.addSvgIconLiteral('CodeShowIcon', sanitizer.bypassSecurityTrustHtml(CodeShowIcon));
        iconRegistry.addSvgIconLiteral('CodeCopyIcon', sanitizer.bypassSecurityTrustHtml(CodeCopyIcon));
    }


    copyText(text) {
        this.clipboardService.copyFromContent(text);
        alert('code copied!')
    }

    showArea(){
        this.isShown = ! this.isShown;
    }
    showStrongArea(){
        this.isStrongShown = !this.isStrongShown;
    }

}


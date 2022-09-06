import { Component } from '@angular/core';
import { ClipboardService } from "ngx-clipboard";

@Component({
    selector: 'component-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent {
    public isShown: boolean = false;
    footer ="" +
        "<olv-footer\n" +
        "    [olvContentMessage]='MessageTemplate'\n" +
        "    [olvExtraMessage]='olvExtraMessage'>\n" +
        "</olv-footer>\n" +
        "\n"+
        "<olv-footer\n" +
        "    [olvContentMessage]='MessageTemplate'\n" +
        "    [olvExtraMessage]='olvExtraMessage'\n" +
        "    olvFooterType='custom'>\n" +
        "</olv-footer>\n"+
        "\n"+
        "<ng-template #MessageTemplate>\n" +
        "    Copyright ⓒ <a href=\"https://www.kakaocorp.com/\" target=\"_blank\"> Kakao Corp.</a> All rights reserved.<br/>\n" +
        "    카카오 기술 플랫폼에서 제공하는 오픈소스 검증 서비스<br/>\n" +
        "</ng-template>\n" +
        "<ng-template #olvExtraMessage>\n" +
        "    <a href=\"https://www.kakao.com/policy/terms?lang=ko\" class=\"text-gray-200 mx-3\">이용약관</a>\n" +
        "    <a href=\"https://www.kakao.com/policy/privacy?lang=ko\" class=\"text-gray-200 mx-3\">개인정보처리방침</a>\n" +
        "</ng-template>";

    constructor(
        private clipboardService: ClipboardService,
    ) {}

    copyText(text) {
        this.clipboardService.copyFromContent(text);
        alert('code copied!')
    }

    showArea(){
        this.isShown = !this.isShown;
    }
}

import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'component-box-style',
    templateUrl: './style.component.html'
})
export class StyleComponent {
    public isShown: boolean = false;
    strong = `<olv-box olvBoxType='basic'
         olvMessage='단순한 안내사항, 프로젝트 목록 그룹핑 등 기본적으로는 상하 24px, 좌우 32px의 여백을 적용'
         [olvContentMessage]='MessageTemplate'>
</olv-box>
<ng-template #MessageTemplate>
    - 단, 1줄일 경우 최소 64px 내에서 middle 정렬을 기본으로 함<br>
    - 컨텐츠 영역의 width 100% 적용이 기본이지만, 필요에 따라 적절하게 사이즈 조정하여 사용 가능
</ng-template>

<olv-box olvBoxType='strong-error'
         [olvMessageTmpl] = 'StrongTmpl'
         [olvContentMessage]='StrongErrorTmpl'>
</olv-box>
<ng-template #StrongTmpl>
    <div class='text-3xl font-bold'>Component</div>
</ng-template>
<ng-template #StrongErrorTmpl>
    <div class='text-red-fg font-bold text-lg'>확인이 필요한 Component : 99 개</div>
    <div class='text-lg'>자동 수집된 Component : 99개</div>
</ng-template>`;

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

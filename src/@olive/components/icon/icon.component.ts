import { Component, Input } from '@angular/core';
import { OlvIconType } from "./icon.type";
import { ClipboardService } from "ngx-clipboard";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {
Anchor,
ArrowBottom,
ArrowRight,
Calendar,
CalendarDisable,
Delete,
FileDisable,
Next,
Plus,
File,
Folder,
FolderDisable,
Sort,
SortSelect,
Filter,
FilterSelect,
Search,
FileSelect,
Check,
Close,
CheckCircle,
CheckCircleSelect,
CheckCircleSelected,
CheckCircleStrong,
Crown,
CrownDisable,
Branches,
Lock,
Repository,
Copy,
History,
HistorySelect,
Reload,
Note,
Success,
Error,
QuestionCircle,
ArrowNextCircle,
Left,
Right,
Backword,
Forward,
Project,
ProjectSelect,
ProjectSelected,
List,
ListSelect,
ListSelected,
FileList,
AuditList,
MoreDisable,
More,
Reload_b,
ReloadSelect_b,
Home_b,
HomeSelect_b,
Project_b,
ProjectSelect_b,
Profile_b,
ProfileSelect_b,
Stamp_b,
Download_b,
DownloadDisable_b,
FileListSelect_b,
FileList_b,
StampSelect_b,
Next_w,
Prev_w,
Search_w,
Plus_w,
Arrow_w,
CodeCopyIcon,
CodeShowIcon
} from "../../../app/shared/icon/Icon.svg";


@Component({
    selector: 'olv-icon',
    templateUrl: 'icon.component.html'
})
export class OlvIconComponent  {
    @Input() olvIcon: OlvIconType = null;

    constructor(
        private clipboardService: ClipboardService,
        private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer

    ) {
        iconRegistry.addSvgIconLiteral('Next', sanitizer.bypassSecurityTrustHtml(Next));
        iconRegistry.addSvgIconLiteral('Plus', sanitizer.bypassSecurityTrustHtml(Plus));
        iconRegistry.addSvgIconLiteral('Delete', sanitizer.bypassSecurityTrustHtml(Delete));
        iconRegistry.addSvgIconLiteral('ArrowRight', sanitizer.bypassSecurityTrustHtml(ArrowRight));
        iconRegistry.addSvgIconLiteral('ArrowBottom', sanitizer.bypassSecurityTrustHtml(ArrowBottom));
        iconRegistry.addSvgIconLiteral('Anchor', sanitizer.bypassSecurityTrustHtml(Anchor));
        iconRegistry.addSvgIconLiteral('Calendar', sanitizer.bypassSecurityTrustHtml(Calendar));
        iconRegistry.addSvgIconLiteral('CalendarDisable', sanitizer.bypassSecurityTrustHtml(CalendarDisable));
        iconRegistry.addSvgIconLiteral('File', sanitizer.bypassSecurityTrustHtml(File));
        iconRegistry.addSvgIconLiteral('FileDisable', sanitizer.bypassSecurityTrustHtml(FileDisable));
        iconRegistry.addSvgIconLiteral('Folder', sanitizer.bypassSecurityTrustHtml(Folder));
        iconRegistry.addSvgIconLiteral('FolderDisable', sanitizer.bypassSecurityTrustHtml(FolderDisable));
        iconRegistry.addSvgIconLiteral('Sort', sanitizer.bypassSecurityTrustHtml(Sort));
        iconRegistry.addSvgIconLiteral('SortSelect', sanitizer.bypassSecurityTrustHtml(SortSelect));
        iconRegistry.addSvgIconLiteral('Filter', sanitizer.bypassSecurityTrustHtml(Filter));
        iconRegistry.addSvgIconLiteral('FilterSelect', sanitizer.bypassSecurityTrustHtml(FilterSelect));
        iconRegistry.addSvgIconLiteral('Search', sanitizer.bypassSecurityTrustHtml(Search));
        iconRegistry.addSvgIconLiteral('FileSelect', sanitizer.bypassSecurityTrustHtml(FileSelect));
        iconRegistry.addSvgIconLiteral('Check', sanitizer.bypassSecurityTrustHtml(Check));
        iconRegistry.addSvgIconLiteral('Close', sanitizer.bypassSecurityTrustHtml(Close));
        iconRegistry.addSvgIconLiteral('CheckCircle', sanitizer.bypassSecurityTrustHtml(CheckCircle));
        iconRegistry.addSvgIconLiteral('CheckCircleSelect', sanitizer.bypassSecurityTrustHtml(CheckCircleSelect));
        iconRegistry.addSvgIconLiteral('CheckCircleSelected', sanitizer.bypassSecurityTrustHtml(CheckCircleSelected));
        iconRegistry.addSvgIconLiteral('CheckCircleStrong', sanitizer.bypassSecurityTrustHtml(CheckCircleStrong));
        iconRegistry.addSvgIconLiteral('Crown', sanitizer.bypassSecurityTrustHtml(Crown));
        iconRegistry.addSvgIconLiteral('CrownDisable', sanitizer.bypassSecurityTrustHtml(CrownDisable));
        iconRegistry.addSvgIconLiteral('Branches', sanitizer.bypassSecurityTrustHtml(Branches));
        iconRegistry.addSvgIconLiteral('Lock', sanitizer.bypassSecurityTrustHtml(Lock));
        iconRegistry.addSvgIconLiteral('Repository', sanitizer.bypassSecurityTrustHtml(Repository));
        iconRegistry.addSvgIconLiteral('Copy', sanitizer.bypassSecurityTrustHtml(Copy));
        iconRegistry.addSvgIconLiteral('History', sanitizer.bypassSecurityTrustHtml(History));
        iconRegistry.addSvgIconLiteral('HistorySelect', sanitizer.bypassSecurityTrustHtml(HistorySelect));
        iconRegistry.addSvgIconLiteral('Reload', sanitizer.bypassSecurityTrustHtml(Reload));
        iconRegistry.addSvgIconLiteral('Note', sanitizer.bypassSecurityTrustHtml(Note));
        iconRegistry.addSvgIconLiteral('Success', sanitizer.bypassSecurityTrustHtml(Success));
        iconRegistry.addSvgIconLiteral('Error', sanitizer.bypassSecurityTrustHtml(Error));
        iconRegistry.addSvgIconLiteral('QuestionCircle', sanitizer.bypassSecurityTrustHtml(QuestionCircle));
        iconRegistry.addSvgIconLiteral('ArrowNextCircle', sanitizer.bypassSecurityTrustHtml(ArrowNextCircle));
        iconRegistry.addSvgIconLiteral('Left', sanitizer.bypassSecurityTrustHtml(Left));
        iconRegistry.addSvgIconLiteral('Right', sanitizer.bypassSecurityTrustHtml(Right));
        iconRegistry.addSvgIconLiteral('Backword', sanitizer.bypassSecurityTrustHtml(Backword));
        iconRegistry.addSvgIconLiteral('Forward', sanitizer.bypassSecurityTrustHtml(Forward));
        iconRegistry.addSvgIconLiteral('Project', sanitizer.bypassSecurityTrustHtml(Project));
        iconRegistry.addSvgIconLiteral('ProjectSelect', sanitizer.bypassSecurityTrustHtml(ProjectSelect));
        iconRegistry.addSvgIconLiteral('ProjectSelected', sanitizer.bypassSecurityTrustHtml(ProjectSelected));
        iconRegistry.addSvgIconLiteral('List', sanitizer.bypassSecurityTrustHtml(List));
        iconRegistry.addSvgIconLiteral('ListSelect', sanitizer.bypassSecurityTrustHtml(ListSelect));
        iconRegistry.addSvgIconLiteral('ListSelected', sanitizer.bypassSecurityTrustHtml(ListSelected));
        iconRegistry.addSvgIconLiteral('FileList', sanitizer.bypassSecurityTrustHtml(FileList));
        iconRegistry.addSvgIconLiteral('AuditList', sanitizer.bypassSecurityTrustHtml(AuditList));
        iconRegistry.addSvgIconLiteral('MoreDisable', sanitizer.bypassSecurityTrustHtml(MoreDisable));
        iconRegistry.addSvgIconLiteral('More', sanitizer.bypassSecurityTrustHtml(More));
        iconRegistry.addSvgIconLiteral('Reload_b', sanitizer.bypassSecurityTrustHtml(Reload_b));
        iconRegistry.addSvgIconLiteral('ReloadSelect_b', sanitizer.bypassSecurityTrustHtml(ReloadSelect_b));
        iconRegistry.addSvgIconLiteral('Home_b', sanitizer.bypassSecurityTrustHtml(Home_b));
        iconRegistry.addSvgIconLiteral('HomeSelect_b', sanitizer.bypassSecurityTrustHtml(HomeSelect_b));
        iconRegistry.addSvgIconLiteral('Project_b', sanitizer.bypassSecurityTrustHtml(Project_b));
        iconRegistry.addSvgIconLiteral('ProjectSelect_b', sanitizer.bypassSecurityTrustHtml(ProjectSelect_b));
        iconRegistry.addSvgIconLiteral('Profile_b', sanitizer.bypassSecurityTrustHtml(Profile_b));
        iconRegistry.addSvgIconLiteral('ProfileSelect_b', sanitizer.bypassSecurityTrustHtml(ProfileSelect_b));
        iconRegistry.addSvgIconLiteral('Stamp_b', sanitizer.bypassSecurityTrustHtml(Stamp_b));
        iconRegistry.addSvgIconLiteral('StampSelect_b', sanitizer.bypassSecurityTrustHtml(StampSelect_b));
        iconRegistry.addSvgIconLiteral('FileList_b', sanitizer.bypassSecurityTrustHtml(FileList_b));
        iconRegistry.addSvgIconLiteral('FileListSelect_b', sanitizer.bypassSecurityTrustHtml(FileListSelect_b));
        iconRegistry.addSvgIconLiteral('DownloadDisable_b', sanitizer.bypassSecurityTrustHtml(DownloadDisable_b));
        iconRegistry.addSvgIconLiteral('Download_b', sanitizer.bypassSecurityTrustHtml(Download_b));
        iconRegistry.addSvgIconLiteral('Arrow_w', sanitizer.bypassSecurityTrustHtml(Arrow_w));
        iconRegistry.addSvgIconLiteral('Plus_w', sanitizer.bypassSecurityTrustHtml(Plus_w));
        iconRegistry.addSvgIconLiteral('Search_w', sanitizer.bypassSecurityTrustHtml(Search_w));
        iconRegistry.addSvgIconLiteral('Prev_w', sanitizer.bypassSecurityTrustHtml(Prev_w));
        iconRegistry.addSvgIconLiteral('Next_w', sanitizer.bypassSecurityTrustHtml(Next_w));
        iconRegistry.addSvgIconLiteral('CodeCopyIcon', sanitizer.bypassSecurityTrustHtml(CodeCopyIcon));
        iconRegistry.addSvgIconLiteral('CodeShowIcon', sanitizer.bypassSecurityTrustHtml(CodeShowIcon));
    }
}















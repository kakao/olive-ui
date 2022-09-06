import { NgModule } from '@angular/core';

import { BoxComponent } from './box/box.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FooterComponent } from './footer/footer.component';
import { GnbComponent } from './gnb/gnb.component';
import { IconImageComponent } from './iconImage/iconImage.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OtherComponent } from './other/other.component';
import { PagingComponent } from './paging/paging.component';
import { PopupComponent } from './popup/popup.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';
import { TagBadgeComponent } from './tagBadge/tagBadge.component';
import { SharedModule } from "../../shared/shared.module";
import { CardComponent } from "./card/card.component";
import { CollapseComponent } from "./collapse/collapse.component";
import { DatePickerComponent } from "./datePicker/date-picker.component";
import { TreeComponent } from "./tree/tree.component";
import { TypeComponent } from './box/type/type.component';
import { StyleComponent } from './box/style/style.component';
import { ClipboardModule } from 'ngx-clipboard';
import { OlvBoxModule } from '../../../@olive/components/box/box.module';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MatIconModule } from '@angular/material/icon';
import { OlvFooterModule } from "../../../@olive/components/footer/footer.module";
import { OlvIconModule } from "../../../@olive/components/icon/icon.module";

const COMPONENTS = [
    BoxComponent,
    ButtonComponent,
    CardComponent,
    CheckboxComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    FooterComponent,
    GnbComponent,
    IconImageComponent,
    InputboxComponent,
    NavigationComponent,
    PagingComponent,
    PopupComponent,
    RadiobuttonComponent,
    StyleComponent,
    TabComponent,
    TableComponent,
    TagBadgeComponent,
    TreeComponent,
    TypeComponent,
    OtherComponent,
];

@NgModule({
    imports: [SharedModule, ComponentsRoutingModule, ClipboardModule, OlvBoxModule, HighlightModule, MatIconModule, OlvFooterModule, OlvIconModule],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    css: () => import('highlight.js/lib/languages/css'),
                    xml: () => import('highlight.js/lib/languages/xml')
                },
            }
        }
    ],
    declarations: COMPONENTS
})
export class ComponentsModule {}

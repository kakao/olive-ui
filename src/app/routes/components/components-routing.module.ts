import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoxComponent } from './box/box.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
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
import { CardComponent } from "./card/card.component";
import { CollapseComponent } from "./collapse/collapse.component";
import { DatePickerComponent } from "./datePicker/date-picker.component";
import { TreeComponent } from "./tree/tree.component";

const routes: Routes = [
    { path: '', redirectTo: 'color', pathMatch: 'full' },
    { path: 'box', component: BoxComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'card', component: CardComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: 'collapse', component: CollapseComponent },
    { path: 'datePicker', component: DatePickerComponent },
    { path: 'dropdown', component: DropdownComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'gnb', component: GnbComponent },
    { path: 'iconImage', component: IconImageComponent },
    { path: 'inputBox', component: InputboxComponent },
    { path: 'navigation', component: NavigationComponent },
    { path: 'paging', component: PagingComponent },
    { path: 'popup', component: PopupComponent },
    { path: 'radioButton', component: RadiobuttonComponent },
    { path: 'tab', component: TabComponent },
    { path: 'table', component: TableComponent },
    { path: 'tagBadge', component: TagBadgeComponent },
    { path: 'tree', component: TreeComponent },
    { path: 'other', component: OtherComponent },
    { path: '**', redirectTo: 'exception/404' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {}

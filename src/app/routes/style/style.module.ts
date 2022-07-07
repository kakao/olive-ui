import { NgModule, Type } from '@angular/core';

import { ColorComponent } from './color/color.component';
import { LayoutComponent } from './layout/layout.component';
import { SpacingComponent } from './spacing/spacing.component';
import { StyleRoutingModule } from './style-routing.module';
import { TextComponent } from './text/text.component';
import { SharedModule } from "../../shared/shared.module";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";
import { MatTabsModule } from "@angular/material/tabs";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { TextTitleComponent } from "./text/title/text-title.component";
import { TextBodyComponent } from "./text/body/text-body.component";
import { TextMenuComponent } from "./text/menu/text-menu.component";
import { TextGnbComponent } from "./text/gnb/text-gnb.component";
import { TextTableComponent } from "./text/table/text-table.component";
import { TextTabComponent } from "./text/tab/text-tab.component";
import { TextInputComponent } from "./text/input/text-input.component";
import { TextDataComponent } from "./text/data/text-data.component";
import { TextFontComponent } from "./text/font/text-font.component";

const COMPONENTS = [
    ColorComponent,
    LayoutComponent,
    SpacingComponent,
    TextComponent,
    TextFontComponent,
    TextTitleComponent,
    TextBodyComponent,
    TextMenuComponent,
    TextGnbComponent,
    TextTabComponent,
    TextInputComponent,
    TextDataComponent,
    TextTableComponent,
    DashboardComponent
];

@NgModule({
  imports: [
      SharedModule,
      StyleRoutingModule,
      MatIconModule,
      MatRippleModule,
      MatTabsModule,
  ],
  declarations: COMPONENTS
})
export class StyleModule {}

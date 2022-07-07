import { OliveHorizontalNavigationComponent } from "./horizontal/horizontal.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        OliveHorizontalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule
    ],
    exports     : [
        OliveHorizontalNavigationComponent
    ]
})
export class OliveNavigationModule {

}

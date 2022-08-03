import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from 'app/shared/shared.module';
import { BasicLayoutComponent } from "./basic.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MenuComponent } from "../menu/menu.component";
import { OlvFooterModule } from "../../../@olive/components/footer/footer.module";

@NgModule({
    declarations: [
        BasicLayoutComponent,
        MenuComponent
    ],
    imports: [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        SharedModule,
        MatSidenavModule,
        OlvFooterModule
    ],
    exports     : [
        BasicLayoutComponent,
        MenuComponent
    ]
})
export class BasicLayoutModule {
}

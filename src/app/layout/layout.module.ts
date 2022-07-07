import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { LayoutComponent } from "./layout.component";
import { BasicLayoutModule } from "./basic/basic.module";

const LAYOUTS = [
  BasicLayoutModule
];

@NgModule({
    imports     : [
        SharedModule,
        ...LAYOUTS
    ],
    declarations: [
        LayoutComponent,
    ],
    exports     : [
        LayoutComponent,
        ...LAYOUTS
    ]
})
export class LayoutModule {
}

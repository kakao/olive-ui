import { NgModule } from '@angular/core';
import { OlvBoxComponent } from './box.component';
import { CommonModule } from '@angular/common';
import { OlvIconModule } from "../icon/icon.module";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations:[
        OlvBoxComponent
    ],
    imports: [
        CommonModule,
        OlvIconModule,
        MatIconModule

    ],
    exports:[
        OlvBoxComponent
    ]
})
export class OlvBoxModule{}

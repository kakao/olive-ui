import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlvIconComponent } from "./icon.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations:[
        OlvIconComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,


    ],
    exports:[
        OlvIconComponent,
    ]
})

export class OlvIconModule{}


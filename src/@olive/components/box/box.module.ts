import { NgModule } from '@angular/core';
import { OlvBoxComponent } from './box.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        OlvBoxComponent
    ],
  imports: [
    CommonModule

  ],
    exports:[
        OlvBoxComponent
    ]
})
export class OlvBoxModule{}

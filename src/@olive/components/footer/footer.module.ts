import { NgModule } from '@angular/core';
import { OlvFooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        OlvFooterComponent
    ],
  imports: [
    CommonModule

  ],
    exports:[
        OlvFooterComponent
    ]
})
export class OlvFooterModule{}

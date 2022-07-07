import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MATERIAL_SANITY_CHECKS } from "@angular/material/core";



@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class OliveModule {}

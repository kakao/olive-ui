import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColorComponent } from './color/color.component';
import { LayoutComponent } from './layout/layout.component';
import { SpacingComponent } from './spacing/spacing.component';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  { path: '', redirectTo: 'color', pathMatch: 'full' },
  { path: 'color', component: ColorComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'spacing', component: SpacingComponent },
  { path: 'text', component: TextComponent },
  { path: '**', redirectTo: 'exception/404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleRoutingModule {}

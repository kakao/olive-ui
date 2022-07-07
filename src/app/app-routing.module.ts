import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { NgModule } from "@angular/core";
import { environment } from "../environments/environment";
import { DashboardComponent } from "./routes/dashboard/dashboard.component";

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch : 'full',
        redirectTo: 'style/color'
    },
    {
        path: '',
        component  : LayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'style', loadChildren: () => import('./routes/style/style.module').then(m => m.StyleModule) },
            { path: 'component', loadChildren: () => import('./routes/components/components.module').then(m => m.ComponentsModule) },
        ]
    },
    { path: '**', redirectTo: 'exception/404' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            scrollPositionRestoration: 'top',
            useHash: environment.useHash,
        })
    ],
    exports: [RouterModule]
})
export class RouteRoutingModule {}

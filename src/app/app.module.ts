import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OliveModule } from '@olive';
import { MarkdownModule } from "ngx-markdown";
import { LayoutModule } from "./layout/layout.module";
import { ExtraOptions, PreloadAllModules, RouterModule } from "@angular/router";
import { ClipboardModule } from 'ngx-clipboard';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from "./core/core.module";
import { OliveUiErrorHandler } from "./core/errorHandler/olive-ui-error-handler";


const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        ClipboardModule,
        CoreModule,
        OliveModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        MarkdownModule.forRoot({}),
        LayoutModule,
        HighlightModule
    ],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    css: () => import('highlight.js/lib/languages/css'),
                    xml: () => import('highlight.js/lib/languages/xml')
                },
            }
        },
        {
            provide: ErrorHandler,
            useClass: OliveUiErrorHandler
        }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}

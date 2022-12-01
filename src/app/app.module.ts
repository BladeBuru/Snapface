import { NgModule , LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { FaceSnapLisComponent } from './face-snap-lis/face-snap-lis.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import { LadingPageComponent } from './lading-page/lading-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';


@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapLisComponent,
    HeaderComponent,
    LadingPageComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}

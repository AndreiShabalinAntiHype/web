import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {Routes, RouterModule} from "@angular/router";

import {AppComponent } from './app.component';
import { CatListComponent } from './cat-list/cat-list.component';
import {CatComponent} from "./cat/cat.component";
import { BadCatsComponent } from './bad-cats/bad-cats.component';
import { GoodCatsComponent } from './good-cats/good-cats.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    CatComponent,
    BadCatsComponent,
    GoodCatsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  myStorage = window.localStorage;



}

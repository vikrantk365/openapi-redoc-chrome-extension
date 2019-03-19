import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatTabsModule} from '@angular/material/tabs';
import { Doc1Component } from './doc1/doc1.component';
import { Doc2Component } from './doc2/doc2.component'

@NgModule({
  declarations: [
    AppComponent,
    Doc1Component,
    Doc2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

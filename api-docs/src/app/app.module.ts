import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTabsModule } from '@angular/material/tabs';
import { Doc1Component } from './doc1/doc1.component';
import { DocumentService } from './document.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Doc1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}

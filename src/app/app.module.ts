import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Page2Component } from './page/page2/page2.component';

const routes: Routes = [
  {
    path: 'page2',
    component: Page2Component
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

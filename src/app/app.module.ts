import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SomaComponent } from './soma/soma.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SomaComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
  }
}

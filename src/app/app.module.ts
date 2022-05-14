import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionPageComponent } from './modules/session/session-page.component';
import { ShiftComponent } from './modules/session/components/shift/shift.component';
import { NavbarComponent } from './modules/shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionPageComponent,
    ShiftComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

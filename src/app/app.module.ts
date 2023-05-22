import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { WelcomeNoHeaderComponent } from './welcome-no-header/welcome-no-header.component';
import { WelcomeHasHeaderComponent } from './welcome-has-header/welcome-has-header.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeNoHeaderComponent,
    WelcomeHasHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './components/nav-bar-component/nav-bar-component.component';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';
import { BackgroundComponent } from './components/background/background.component';
import { FeedbackNavbarComponent } from './components/feedback-navbar/feedback-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    GridLayoutComponent,
    BackgroundComponent,
    FeedbackNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

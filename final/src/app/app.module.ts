import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './components/nav-bar-component/nav-bar-component.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScreenTwoComponent } from './components/screen-two/screen-two.component';
import { FormsModule } from '@angular/forms';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';
import { BackgroundComponent } from './components/background/background.component';
import { FeedbackNavbarComponent } from './components/feedback-navbar/feedback-navbar.component';
import { HistoryComponent } from './components/history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    FeedbackComponent,
    CommentsComponent,
    ContactComponent,
    ScreenTwoComponent,
    GridLayoutComponent,
    BackgroundComponent,
    FeedbackNavbarComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

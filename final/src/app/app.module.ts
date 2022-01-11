import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './components/nav-bar-component/nav-bar-component.component';
import { ProjectTableComponent } from './components/project-table/project-table.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScreenTwoComponent } from './components/screen-two/screen-two.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    ProjectTableComponent,
    FeedbackComponent,
    CommentsComponent,
    ContactComponent,
    ScreenTwoComponent,
    
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

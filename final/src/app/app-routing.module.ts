import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './components/background/background.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackNavbarComponent } from './components/feedback-navbar/feedback-navbar.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  {
    path:'',
    component:BackgroundComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'comment',
    component: CommentsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

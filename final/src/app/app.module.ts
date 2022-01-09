import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './components/nav-bar-component/nav-bar-component.component';
import { ProjectTableComponent } from './components/project-table/project-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    ProjectTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

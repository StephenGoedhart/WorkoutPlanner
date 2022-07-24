import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftPaneComponent } from './content/left-pane/left-pane.component';
import { ContentComponent } from './content/content.component';
import { CalendarComponent } from './content/calendar/calendar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ContentComponent, LeftPaneComponent, CalendarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

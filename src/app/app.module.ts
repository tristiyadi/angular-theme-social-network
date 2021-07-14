import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusComponent } from './menus/menus.component';
import { ContentsComponent } from './contents/contents.component';
import { ActivityComponent } from './activity/activity.component';
import { ChannelsComponent } from './channels/channels.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    ContentsComponent,
    ActivityComponent,
    ChannelsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

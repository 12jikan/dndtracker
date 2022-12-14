import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageModule } from './features/mainpage/mainpage.module';
import { SharedModule } from './shared/shared.module';
import { CharacterCreationModule } from './features/character-creation/character-creation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainpageModule,
    SharedModule,
    CharacterCreationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

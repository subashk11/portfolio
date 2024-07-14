import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { WelcomePageComponent } from './container/welcome-page/welcome-page.component';
import { HeaderComponent } from './container/header/header.component';
import { AboutPageComponent } from './container/about-page/about-page.component';
import { SkillsPageComponent } from './container/skills-page/skills-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    WelcomePageComponent,
    HeaderComponent,
    AboutPageComponent,
    SkillsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

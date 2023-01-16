import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpanishComponent } from './spanish/spanish.component';
import { EnglishComponent } from './english/english.component';
import { NavbarComponent } from './spanish/navbar/navbar.component';
import { SkillsComponent } from './spanish/skills/skills.component';
import { WorkExperienceComponent } from './spanish/work-experience/work-experience.component';
import { ContactComponent } from './spanish/contact/contact.component';
import { SocialMediaComponent } from './spanish/social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    SpanishComponent,
    EnglishComponent,
    NavbarComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ContactComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { ContactEngComponent } from './english/contact-eng/contact-eng.component';
import { NavbarEngComponent } from './english/navbar-eng/navbar-eng.component';
import { SkillsEngComponent } from './english/skills-eng/skills-eng.component';
import { SocialMediaEngComponent } from './english/social-media-eng/social-media-eng.component';
import { WorkExperienceEngComponent } from './english/work-experience-eng/work-experience-eng.component';
import { FrontPageComponent } from './spanish/front-page/front-page.component';
import { FrontPageEngComponent } from './english/front-page-eng/front-page-eng.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    SpanishComponent,
    EnglishComponent,
    NavbarComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ContactComponent,
    SocialMediaComponent,
    ContactEngComponent,
    NavbarEngComponent,
    SkillsEngComponent,
    SocialMediaEngComponent,
    WorkExperienceEngComponent,
    FrontPageComponent,
    FrontPageEngComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { LanguageSwitcher } from 'src/shared/changeLanguage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private languageSwitcher:LanguageSwitcher){}

  announceLanguageChanged(){
    this.languageSwitcher.onLanguage();
    const language = this.languageSwitcher.getLanguage();
    this.languageSwitcher.announceChange(language);
  }

}

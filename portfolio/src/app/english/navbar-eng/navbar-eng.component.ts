import { Component } from '@angular/core';
import { LanguageSwitcher } from 'src/shared/changeLanguage.service';

@Component({
  selector: 'app-navbar-eng',
  templateUrl: './navbar-eng.component.html',
  styleUrls: ['./navbar-eng.component.css']
})
export class NavbarEngComponent{

  constructor(private languageSwitcher:LanguageSwitcher){}
  
  announceLanguageChanged(){
    this.languageSwitcher.onLanguage();
    const language = this.languageSwitcher.getLanguage();
    this.languageSwitcher.announceChange(language);
  }

  onDownloadResume(){
    window.open('assets/resumes/CV_Alejandro_Florido_Reyes(ENG).pdf');
  }
  

}

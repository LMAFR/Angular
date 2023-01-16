import { Component, OnInit } from '@angular/core';
import { LanguageSwitcher } from 'src/shared/changeLanguage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-ng';

  constructor(private languageSwitcher:LanguageSwitcher ){}

  language:String = "";

  ngOnInit(){
    this.language = this.languageSwitcher.getLanguage();
  }

}


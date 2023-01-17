import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LanguageSwitcher } from 'src/shared/changeLanguage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-ng';

  constructor(private languageSwitcher:LanguageSwitcher ){}

  language:string = "";

  ngOnInit(){
    this.language = this.languageSwitcher.getLanguage();
    console.log(this.language);
  }

}


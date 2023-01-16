import { Component, OnInit } from '@angular/core';
import { LanguageSwitcher } from 'src/shared/changeLanguage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  language:String = "";

  constructor(private languageSwitcher:LanguageSwitcher){}

  ngOnInit(): void {
      this.language = this.languageSwitcher.getLanguage();
  }

  onLanguage(){
    this.languageSwitcher.onLanguage();
  }

}

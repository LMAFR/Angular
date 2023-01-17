import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguageSwitcher } from 'src/shared/changeLanguage.service';

@Component({
  selector: 'app-navbar-eng',
  templateUrl: './navbar-eng.component.html',
  styleUrls: ['./navbar-eng.component.css']
})
export class NavbarEngComponent implements OnInit {

  @Output() language = new EventEmitter<string>();

  constructor(private languageSwitcher:LanguageSwitcher){}

  ngOnInit(): void {
  }

  onLanguage(){
    this.languageSwitcher.onLanguage();
    // this.language.emit(this.languageSwitcher.getLanguage());
  }



}

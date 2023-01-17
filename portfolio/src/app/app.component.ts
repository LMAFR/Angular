import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageSwitcher } from 'src/shared/changeLanguage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio-ng';
  language:string = "";
  subscription: Subscription;

  constructor(private languageSwitcher:LanguageSwitcher ){
    this.subscription = languageSwitcher.languageChanged$.subscribe(
      language => {
        this.language = language;
        console.log(this.language);
      }
    )
  }

  ngOnInit(){
    this.language = this.languageSwitcher.getLanguage();
    console.log(this.language);
  }

  ngOnDestroy(): void {
    // prevent memory leak when component gets destroyed.
    this.subscription.unsubscribe();
  }

}


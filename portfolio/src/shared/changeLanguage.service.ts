import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class LanguageSwitcher {
    language: string = "English";
    private languageChangedSource = new Subject<string>();
    languageChanged$ = this.languageChangedSource.asObservable();

    constructor(){}

    announceChange(language:string){
      this.languageChangedSource.next(language)
    }

    onLanguage(){
        if (this.language === "English"){
          this.language = "Spanish";
        } else if (this.language === "Spanish"){
          this.language = "English";
        } else {
          throw new Error ('An unexpected error occurred. \nlanguage variable is not "Spanish" nor "English". \nlanguage is ${language}');
        }
      }

    getLanguage(){
        return this.language;
    }
}
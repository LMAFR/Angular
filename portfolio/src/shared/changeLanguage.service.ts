import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class LanguageSwitcher {
    language: String = "English";

    constructor(){}

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
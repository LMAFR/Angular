import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience-eng',
  templateUrl: './work-experience-eng.component.html',
  styleUrls: ['./work-experience-eng.component.css']
})
export class WorkExperienceEngComponent {

  timeInCompany(eDate: string, iDate: string){
    let endDate = new Date(eDate);
    let initDate = new Date(iDate);
    let months:number;
    let years:number;
    let time:string;

    if (eDate === ""){
      endDate = new Date();
      months = (endDate.getFullYear() - initDate.getFullYear())*12; // Result is in ms
      months += endDate.getMonth();
    }
    else {
      months = (endDate.getFullYear() - initDate.getFullYear())*12; // Result is in ms
      months += endDate.getMonth();
    }
    months -= initDate.getMonth();

    if (months%12 !== 0 && months >12){
      years = Math.floor(months/12);
      months = months - years*12;
      if (years === 1 && months === 1) {
        time = `${years} Year, ${months} Month`;
      } else if (years === 1 && months !== 1) {
        time = `${years} Year, ${months} Months`;
      } else if (months === 1 && years !== 1) {
        time = `${years} Years, ${months} Month`;
      } else {
        time = `${years} Years, ${months} Months`;
      }
    } else if (months < 12) {
      if (months === 1) {
        time = `${months} Month`;
      } else{
        time = `${months} Months`;
      }
    } else {
      years = months/12;
      if (years === 1){
        time = `${years} Year`;
      } else {
        time = `${years} Years`;
      }
    }
    return time
  }

}

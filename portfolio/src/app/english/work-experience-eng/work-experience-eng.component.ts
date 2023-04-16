import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience-eng',
  templateUrl: './work-experience-eng.component.html',
  styleUrls: ['./work-experience-eng.component.css']
})
export class WorkExperienceEngComponent {

  workExperience = [
    {
      company:'Scientia Prop Traders',
      sector:'',
      backgroundImg: './assets/img/trading.jpg',
      role:'Software Engineer',
      startDate:'2019/12',
      endDate:'2020/06',
      tasks: 
        [
          'Automation of trading processes in MetaTrader4, mostly through the creation of visual indicators.',
          'First approach to Neural Networks and Python.',
          'Attempts to create a customized trading bot.',
        ]
    },
    {
      company:'Indra',
      sector:'AI Department',
      backgroundImg: './assets/img/indra_edificio.jpg',
      role:'Data Scientist',
      startDate:'2021/03',
      endDate:'2021/06',
      tasks: 
        [
          'Improvement of financial processes choosing the best Machine Learning algorithm and refactoring code for optimization. The programming language was Python.',
          'Management of Local Virtual Environments using Bash.',
          'Design of ETLs using AWS (Redshift) and SQL.'
        ]
    },
    {
      company:'Management Solutions',
      sector:'Market Risk',
      backgroundImg: './assets/img/ms_edificio.jpg',
      role:'Data Engineer',
      startDate:'2021/06',
      endDate:'2022/03',
      tasks: 
        [
          'Development of a tool to check FRTB requirements using Python.',
          'Creation of GUIs in Python using Tkinter.',
          'Design of ETLs in Google Cloud using Pandas, Scikit-Learn and Numpy for Data Management.'
        ]
    },
    {
      company:'KPMG',
      sector:'Financial Services',
      backgroundImg: './assets/img/kpmg_edificio.jpg',
      role:'Data Engineer & FullStack Developer',
      startDate:'2022/03',
      endDate:'Now',
      tasks: 
        [
          'Development of features for internal project.',
          'Main tools: Angular (Front-End), Django (Back-End) and Microsoft SQL Server (Database).',
          'Other tools: Git, AWS, Jira.',
          'Two international projects 100% in English and Full Remote.',
          'ETLs and analysis of data using SAS.',
          'Client audited by ECB and PRA (IRB model validation for Credit Risk).'
        ]
    },
  ]
  
  timeInCompany(eDate: string, iDate: string){
    let fixedIDate = (iDate+'/01').replaceAll('/','-')
    let fixedEDate = ''
    if (eDate !== 'Now'){
      fixedEDate = (eDate+'/01').replaceAll('/','-');
    }

    let endDate = new Date(fixedEDate);
    let initDate = new Date(fixedIDate);
    let months:number;
    let years:number;
    let time:string;

    if (fixedEDate === ""){
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

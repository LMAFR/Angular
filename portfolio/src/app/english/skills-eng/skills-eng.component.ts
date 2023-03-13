import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-eng',
  templateUrl: './skills-eng.component.html',
  styleUrls: ['./skills-eng.component.css'],
  animations: [
  //   trigger ('skillBarGrowth', [
  //   transition(':enter', [
  //     // Initial state of element
  //     style({width:0}),
  //     // Final state of element after it enters in the view (DOM)
  //     animate('1s', style({width:100}))
  //   ]),
  //   transition(':leave', [
  //     // Final state of element after it goes out of the view (DOM)
  //     animate('2.5s', style({width:0}))
  //   ])
  // ])
]
})
export class SkillsEngComponent {

  // isShown:boolean = false;

  // I still have to make this function trigger when it surpasses the elements with the class skill-per
  // inViewPort(){
  //   if (document.querySelectorAll('[skill-per]')){
  //     this.isShown = true;
  //   } else {
  //     this.isShown = false;
  //   }
  // }

  all_projects = 
  [
    {
      skill: 'React',
      projects : [
        {
          title: 'Twitter Follow Card',
          repository: 'https://github.com/LMAFR/React/tree/main/projects/twitter-follow-card'
        },
        {
          title: 'Mouse Follower',
          repository: 'https://github.com/LMAFR/React/tree/main/projects/mouse-follower'
        },
        {
          title: 'Tic Tac Toe',
          repository: 'https://github.com/LMAFR/React/tree/main/projects/tic-tac-toe'
        },
        {
          title: 'Data fetching (extract data from APIs and use it)',
          repository: 'https://github.com/LMAFR/React/tree/main/projects/data-fetching'
        },
        {
          title: 'Shopping Cart',
          repository: 'https://github.com/LMAFR/React/tree/main/projects/shopping-cart'
        },
        {
          title: 'Film Searcher',
          repository: 'https://github.com/LMAFR/React/tree/main/projects/film-searcher'
        },
        {
          title: 'Custom Router Tool',
          repository: 'https://github.com/LMAFR/React/tree/main/projects/router-tool'
        },
        {
          title: 'To-Do List App',
          repository: 'https://github.com/LMAFR/React/tree/main/projects/todo-app-ts'
        }
      ]
  },
  {
    skill: 'Angular',
    projects : 
      [
        {
          title: 'This website',
          repository: 'https://github.com/LMAFR/React/tree/main/projects/todo-app-ts'
        },
        {
          title: 'Application to create and store cooking recipes',
          repository: 'https://github.com/LMAFR/Angular/tree/main/restaurant_recipes'
        }
      ]
  },
  {
    skill: 'Others',
    projects : [
      {
        title: 'Shiny Dashboard Application based on La Liga',
        repository: 'https://github.com/LMAFR/Shiny_Dashboard_La_Liga/tree/main/TrabajoFinalDV-AlejandroFloridoReyes-DCC'
      },
      {
        title: 'FullStack course on Django, contain several small projects',
        repository: 'https://github.com/LMAFR/Django/tree/master/Full_Stack_Course'
      }
    ]
  }
]

  onAngularRepository(){
    location.href = "https://github.com/LMAFR/Angular";
  };

  onDjangoRepository(){
    location.href = "https://github.com/LMAFR/Django";
  };

  onFlaskRepository(){
    location.href = "https://github.com/LMAFR/Flask";
  };

  onReactRepository(){
    location.href = "https://github.com/LMAFR/React";
  };

  onRustRepository(){
    location.href = "https://github.com/LMAFR/Rust";
  };
}

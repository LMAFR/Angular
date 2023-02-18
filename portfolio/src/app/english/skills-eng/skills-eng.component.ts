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

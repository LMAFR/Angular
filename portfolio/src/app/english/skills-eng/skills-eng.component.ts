import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-eng',
  templateUrl: './skills-eng.component.html',
  styleUrls: ['./skills-eng.component.css']
})
export class SkillsEngComponent {

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

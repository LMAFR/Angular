import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsEngComponent } from './skills-eng.component';

describe('SkillsEngComponent', () => {
  let component: SkillsEngComponent;
  let fixture: ComponentFixture<SkillsEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

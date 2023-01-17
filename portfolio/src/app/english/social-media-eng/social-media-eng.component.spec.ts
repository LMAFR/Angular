import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaEngComponent } from './social-media-eng.component';

describe('SocialMediaEngComponent', () => {
  let component: SocialMediaEngComponent;
  let fixture: ComponentFixture<SocialMediaEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

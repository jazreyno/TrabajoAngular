import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAbout } from './game-about';

describe('GameAbout', () => {
  let component: GameAbout;
  let fixture: ComponentFixture<GameAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

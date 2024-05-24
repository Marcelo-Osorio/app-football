import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubTeamComponent } from './club-team.component';

describe('ClubTeamComponent', () => {
  let component: ClubTeamComponent;
  let fixture: ComponentFixture<ClubTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

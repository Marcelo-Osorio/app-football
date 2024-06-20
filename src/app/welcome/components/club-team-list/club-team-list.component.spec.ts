import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubTeamListComponent } from './club-team-list.component';

describe('ClubTeamListComponent', () => {
  let component: ClubTeamListComponent;
  let fixture: ComponentFixture<ClubTeamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubTeamListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

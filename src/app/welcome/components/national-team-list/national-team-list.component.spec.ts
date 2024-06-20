import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalTeamListComponent } from './national-team-list.component';

describe('NationalTeamListComponent', () => {
  let component: NationalTeamListComponent;
  let fixture: ComponentFixture<NationalTeamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationalTeamListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NationalTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

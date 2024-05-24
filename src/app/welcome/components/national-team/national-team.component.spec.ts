import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalTeamComponent } from './national-team.component';

describe('NationalTeamComponent', () => {
  let component: NationalTeamComponent;
  let fixture: ComponentFixture<NationalTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationalTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NationalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

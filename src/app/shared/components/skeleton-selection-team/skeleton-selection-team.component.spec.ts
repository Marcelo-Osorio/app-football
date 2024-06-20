import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonSelectionTeamComponent } from './skeleton-selection-team.component';

describe('SkeletonSelectionTeamComponent', () => {
  let component: SkeletonSelectionTeamComponent;
  let fixture: ComponentFixture<SkeletonSelectionTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonSelectionTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkeletonSelectionTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

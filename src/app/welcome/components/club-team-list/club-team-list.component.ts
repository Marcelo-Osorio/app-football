import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkModule } from '@cdk/cdk.module';
import { MaterialModule } from '@material/material.module';
import { Equipment } from '@models/teams.model';

@Component({
  selector: 'app-club-team-list',
  standalone: true,
  imports: [CdkModule,MaterialModule],
  templateUrl: './club-team-list.component.html',
  styleUrl: './club-team-list.component.scss'
})
export class ClubTeamListComponent {
  @Input() clubs : Equipment[] = [];
  @Output() sendClub = new EventEmitter<Equipment>();

  selectClub(club : Equipment) {
    this.sendClub.emit(club);
  }
}

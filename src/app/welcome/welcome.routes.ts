import { Routes } from '@angular/router';
import { BackgroundComponent } from '@welcome/components/background/background.component';
import { NationalTeamComponent } from '@welcome/components/national-team/national-team.component';
import { ClubTeamComponent } from '@welcome/components/club-team/club-team.component';

export const WELCOME_ROUTES: Routes = [
  {
    path : '',
    component : BackgroundComponent,
    children : [
      {
        path : '',
        redirectTo : 'national-team',
        pathMatch : 'full'
      },
      {
        path : 'national-team',
        component : NationalTeamComponent
      },
      {
        path : 'club-team',
        component : ClubTeamComponent
      }
    ]
  }
];

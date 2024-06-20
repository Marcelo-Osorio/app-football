import { Component, OnInit } from '@angular/core';
import { Country, Equipment } from '@models/teams.model';
import { TeamsService } from '@services/teams.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, switchMap} from 'rxjs';
import { NationalTeamListComponent } from '@welcome/components/national-team-list/national-team-list.component';
import { ClubTeamListComponent } from '@welcome/components/club-team-list/club-team-list.component';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-club-team',
  standalone: true,
  imports: [NationalTeamListComponent,ClubTeamListComponent,SharedModule,FontAwesomeModule,MaterialModule],
  templateUrl: './club-team.component.html',
  styleUrl: './club-team.component.scss'
})
export class ClubTeamComponent implements OnInit {
  countries:Country[] = [];
  clubs:Equipment[] = [];
  status = true;
  whichTeam = true;
  faAngleLeft = faAngleLeft;

  constructor(
    private teamsService:TeamsService,
    private cookieService :CookieService,
  ) {}

  ngOnInit(): void {
    this.status = false;
    this.teamsService.$refreshCountries
    .pipe(
      switchMap(res => {
        if (res.length == 0) return this.teamsService.getCountries();
        else return new Observable<Country[]>(response => response.next(res));
      })
    )
    .subscribe(res => {
      this.status = true;
      this.countries = res;
    })
  }
  selectClub(club : Equipment) {
    this.cookieService.set('club',JSON.stringify(club));
    //this.router.navigate([]);
  }
  hop() {
    //this.router.navigate([]);
  }
  back() {
    this.whichTeam = true;
  }
  searchClub(nameClub:string) {
    this.whichTeam = false;
    this.status = false;
    this.teamsService.getClubsName(nameClub)
    .subscribe(res => {
      this.status = true;
      this.clubs = res;
    })
  }
  selectCountry(country : Country) {
    this.whichTeam = false;
    this.status = false;
    this.teamsService.getClubsCountries(country.name)
    .subscribe(res => {
      this.status = true;
      this.clubs = res;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Country } from '@models/teams.model';
import { TeamsService } from '@services/teams.service';
import {CookieService} from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NationalTeamListComponent } from '@welcome/components/national-team-list/national-team-list.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';

@Component({
  selector: 'app-national-team',
  standalone: true,
  imports: [FormsModule,NationalTeamListComponent,SharedModule,MaterialModule],
  templateUrl: './national-team.component.html',
  styleUrl: './national-team.component.scss',
})
export class NationalTeamComponent implements OnInit {
  countries : Country[] = [];
  status = false;
  isSearch = false;
  listCountries : any | {}={};

  constructor(
    private teamsService:TeamsService,
    private cookieService: CookieService,
    private router:Router,
    private location:Location,
    private activateRouter:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRouter.queryParamMap
    .subscribe(res => {
      const searchCountry = res.get('search');
      if(searchCountry) {
        if(this.listCountries[searchCountry]) {
          this.countries = this.listCountries[searchCountry];
        } else {
          this.status = false;
          this.teamsService.getCountries(searchCountry)
          .subscribe(res => {
            this.status = true;
            this.listCountries[searchCountry] = res;
            this.countries = res;
          })
        }
      } else {
        if (this.listCountries['totalCountries']) {
          this.countries = this.listCountries['totalCountries'];
        } else {
          this.status = false;
          this.teamsService.getCountries()
          .subscribe(res => {
            this.status = true;
            this.countries = res;
            this.listCountries['totalCountries'] = res;
          });
        }
      }
    })
  }
  selectCountry(country:Country) {
    this.cookieService.set('nationalSelection',JSON.stringify(country));
    this.router.navigate(['/welcome/club-team']);
  }
  hop() {
    this.router.navigate(['/welcome/club-team']);
  }
  searchCountry(countryName:string) {
    this.isSearch = true;
    this.router.navigate([], {
      queryParams : {'search' :countryName}
    });
  }
  back() {
    this.isSearch = false;
    this.location.back();
  }
}

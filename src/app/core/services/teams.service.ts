import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Equipments,Equipment,Countries, Country } from '@models/teams.model';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private apiUrl = environment.apiUrl;
  private refreshCountries = new BehaviorSubject<Country[]>([]);
  $refreshCountries = this.refreshCountries.asObservable();

  constructor(
    private http:HttpClient
  ) { }

  getCountries(name? : string) {
    let params = new HttpParams();
    let addCountries = true;
    if (name) {
      params = params.set('name',name);
      addCountries = false;
    }
    return this.http.get<Countries>(`${this.apiUrl}/countries`, {params})
    .pipe(
      map(countries => {
        if(addCountries) this.refreshCountries.next(countries.response)
        return countries.response;
      })
    );
  }

  getClubsName(name : string) {
    let params = new HttpParams();
    params = params.set('name',name);

    return this.http.get<Equipments>(`${this.apiUrl}/teams`, {params})
    .pipe(
      map(res => res.response.filter(club => !club.team.national))
    )
  }

  getClubsCountries(county : string) {
    let params = new HttpParams();
    params = params.set('country',county);

    return this.http.get<Equipments>(`${this.apiUrl}/teams`, {params})
    .pipe(
      map(res => res.response.filter(club => !club.team.national))
    )
  }
}

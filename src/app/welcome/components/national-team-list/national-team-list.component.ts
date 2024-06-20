import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkModule } from '@cdk/cdk.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { MaterialModule } from '@material/material.module';
import { Country } from '@models/teams.model';

@Component({
  selector: 'app-national-team-list',
  standalone: true,
  imports: [MaterialModule,CdkModule,FontAwesomeModule,FormsModule],
  templateUrl: './national-team-list.component.html',
  styleUrl: './national-team-list.component.scss'
})
export class NationalTeamListComponent {
  faAngleLeft = faAngleLeft;
  countryValue = '';
  @Input() isSearch = false;
  @Input() countries:Country[] = [];

  @Output() searchCountry = new EventEmitter<string>();
  @Output() sendCountry = new EventEmitter<Country>();
  @Output() back = new EventEmitter();

  selectCountry(country : Country) {
    this.sendCountry.emit(country);
  }
  search() {
    this.searchCountry.emit(this.countryValue);
  }

  backs() {
    this.back.emit();
  }
}

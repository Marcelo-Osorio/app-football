import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class="bg-welcome flex items-center justify-center">
    <div class="form-equipment">
      <div class="flex items-center justify-center">
        <img src="./../../../../assets/images/football_icon.png" alt="" class="w-20">
      </div>
      <h1 class="font-bold text-xl flex justify-center font-montserrat">App-Football</h1>
      <router-outlet></router-outlet>
    </div>
  </div>`,
})
export class BackgroundComponent {}

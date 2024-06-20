import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-selection-team',
  standalone: true,
  imports: [],
  template: `
  <div class="space-y-4 animate-pulse">
    <div class="h-11 bg-gray-400 rounded"></div>
    <div class="h-11 bg-gray-400 rounded"></div>
    <div class="h-11 bg-gray-400 rounded"></div>
    <div class="h-11 bg-gray-400 rounded"></div>
    <div class="h-11 bg-gray-400 rounded"></div>
    <div class="h-11 bg-gray-400 rounded"></div>
  </div>
`
})
export class SkeletonSelectionTeamComponent {}

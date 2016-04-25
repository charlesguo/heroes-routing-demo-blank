import { Component } from 'angular2/core';

import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
    </nav>
  `,
  styleUrls: ['app/app.component.css'],
  providers: [
    HeroService
  ]
})

export class AppComponent {
  title = 'Tour of Heroes';
}

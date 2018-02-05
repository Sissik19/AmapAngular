import { Component } from '@angular/core';

interface Nav{
  link: string,
  name: string,
  glyph: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="container">
      <div class="app">
        <div class="header">
          <h1>On fait des tests</h1>
          <nav class="nav" data-spy="affix" data-offset-top="197">
            <a
              *ngFor="let item of nav"
              [routerLink]="item.link"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact:item }">
              <span class="{{item.glyph}}"></span>{{ item.name }}
            </a>
          </nav>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      glyph: 'glyphicon glyphicon-home',
      exact: true
    },
    {
      link: '/customers',
      name: 'Customers',
      glyph: 'glyphicon glyphicon-user',
      exact: true
    }
  ]
}

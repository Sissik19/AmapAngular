import {Component} from "@angular/core";

@Component({
  selector: 'not-found',
  template: `
  <div>
    Page not found : Error 404!! <a routerLink="/">go home?</a>
  </div>
  `
})

export class NotFoundComponent{}

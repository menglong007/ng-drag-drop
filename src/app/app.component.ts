import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  date: any[] = [];

  constructor() {
    this.date = [
      {
        "name": "TM01",
        "months": [
          {
            "name": 'january',
            "products": ['P1', 'P2', 'P3']
          },
          {
            "name": 'feb',
            "products": ['P1', 'P2']
          },
          {
            "name": 'mar',
            "products": ['P1', 'P2']
          }
        ]
      },
      {
        "name": "TM02",
        "months": [
          {
            "name": 'january',
            "products": ['P1', 'P2', 'P3']
          },
          {
            "name": 'feb',
            "products": ['P1', 'P2']
          },
          {
            "name": 'mar',
            "products": ['P1', 'P2']
          }
        ]
      },
    ]
  }
}

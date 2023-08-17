import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
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
            "products": ['P1', 'P2', 'P3','P4','P5','P6']
          },
          {
            "name": 'feb',
            "products": ['P1', 'P2', 'P3','P4','P5','P6']
          },
          {
            "name": 'mar',
            "products": ['P1', 'P2', 'P3','P4','P5','P6']
          },
          {
          "name": 'april',
          "products": ['P1', 'P2', 'P3','P4','P5','P6']
          },
        ]
      },
      {
        "name": "TM02",
        "months": [
          {
            "name": 'january',
            "products": ['P1', 'P2', 'P3','P4','P5','P6']
          },
          {
            "name": 'feb',
            "products": ['P1', 'P2', 'P3','P4','P5','P6']
          },
          {
            "name": 'mar',
            "products": ['P1', 'P2', 'P3','P4','P5','P6']
          },
          {
            "name": 'april',
            "products": ['P1', 'P2', 'P3','P4','P5','P6']
          },
        ]
      },
      {
        "name": "TM03",
        "months": [
          {
            "name": 'january',
            "products": ['P1', 'P2', 'P3','P4','P5','P6']
          },
          {
            "name": 'feb',
            "products": ['P1', 'P2', 'P3','P4','P5','P6']
          },
          {
            "name": 'mar',
            "products": ['P1', 'P2', 'P3','P4','P5','P6']
          },
          {
            "name": 'april',
            "products": ['P1', 'P2', 'P3','P4','P5','P6']
          },
        ]
      },

    ]
  }

  drop(event: CdkDragDrop<string[]> , products : any[] ) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

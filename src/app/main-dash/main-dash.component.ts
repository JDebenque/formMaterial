import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.scss'],
})
export class MainDashComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'A la carte', cols: 1, rows: 1 },
          { title: 'Burgers', cols: 1, rows: 1 },
          { title: 'Galettes/crêpes', cols: 1, rows: 1 },
          { title: 'Pizzas', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'A la carte', cols: 1, rows: 1 },
        { title: 'Burgers', cols: 1, rows: 1 },
        { title: 'Galettes/crêpes', cols: 1, rows: 2 },
        { title: 'Pizzas', cols: 1, rows: 1 },
      ];
    })
  );
}

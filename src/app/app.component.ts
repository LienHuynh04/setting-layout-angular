import { Component } from '@angular/core';
import { LayoutService } from './layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'setting-layout';

  constructor(
    public layoutService: LayoutService,
  ) {
  }
}

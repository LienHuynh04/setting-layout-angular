import { LayoutOptions } from './app/layout/layout.service';

declare module '@angular/router' {
  interface Route {
    layoutOptions?: LayoutOptions;
  }
}

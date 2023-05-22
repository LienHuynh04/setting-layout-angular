import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

export interface LayoutOptions {
  hasHeader?: boolean;
  hasFooter?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private defaultLayout: LayoutOptions = {
    hasHeader: true,
    hasFooter: true,
  };

  layoutOptions: LayoutOptions = {
    hasHeader: true,
    hasFooter: true,
  };

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        const customLayout = this.route.firstChild.snapshot.routeConfig.layoutOptions || this.defaultLayout;
        this.layoutOptions = {...this.defaultLayout, ...customLayout};
      });
  }
}

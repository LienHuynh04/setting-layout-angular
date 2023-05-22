import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeNoHeaderComponent } from './welcome-no-header/welcome-no-header.component';
import { WelcomeHasHeaderComponent } from './welcome-has-header/welcome-has-header.component';

const routes: Routes = [
  {
    path: 'welcome-no-header',
    component: WelcomeNoHeaderComponent,
    layoutOptions: { hasHeader: false },
  },
  {
    path: 'welcome-has-header',
    component: WelcomeHasHeaderComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome-has-header',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

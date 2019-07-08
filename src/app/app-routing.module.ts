import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { AnimationsComponent } from './pages/animations/animations.component';
import { RxjsPageComponent } from './pages/rxjs-page/rxjs-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GlobalNotificationsPageComponent } from './pages/global-notifications-page/global-notifications-page.component';
import { DirectivesComponent } from './pages/directives/directives.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animations: { page: 'homePage' } } },
  { path: 'animations', component: AnimationsComponent, data: { animations: { page: 'animationsPage' } } },
  { path: 'rxjs-page', component: RxjsPageComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'global-notifications-page', component: GlobalNotificationsPageComponent },
  { path: 'login', component: LoginComponent },
  { path: '404', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

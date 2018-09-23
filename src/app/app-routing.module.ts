import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AnimationsComponent } from './animations/animations.component';
import { RxjsPageComponent } from './rxjs-page/rxjs-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animations: { page: 'homePage' } } },
  { path: 'animations', component: AnimationsComponent, data: { animations: { page: 'animationsPage' } } },
  { path: 'rxjs-page', component: RxjsPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

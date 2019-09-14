import { FormsPageModule } from './pages/forms-page/forms-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { GlobalNotificationsPageModule } from './pages/global-notifications-page/global-notifications-page.module';
import { GlobalNotificationsModule } from './components/global-notifications/global-notifications.module';
import { HeaderModule } from './components/header/header.module';
import { AnimationsModule } from './pages/animations/animations.module';
import { DirectivesModule } from './pages/directives/directives.module';

import { HomeComponent } from './pages/home/home.component';
import { RxjsPageComponent } from './pages/rxjs-page/rxjs-page.component';

import { ProfileGithubComponent } from './pages/rxjs-page/children/profile-github/profile-github.component';
import { LoginComponent } from './pages/login/login.component';
import { GlobalNotificationsService } from './services/global-notifications/global-notifications.service';

import { GlobalErrorHandler } from './services/global-error-handler/global-error-handler.service';
import { NotFoundModule } from './pages/not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RxjsPageComponent,
    ProfileGithubComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AnimationsModule,
    GlobalNotificationsPageModule,
    GlobalNotificationsModule,
    HeaderModule,
    DirectivesModule,
    NotFoundModule,
    FormsPageModule,
  ],
  providers: [
    GlobalNotificationsService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

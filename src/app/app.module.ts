import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { GlobalNotificationsPageModule } from './pages/global-notifications-page/global-notifications-page.module';
import { GlobalNotificationsModule } from './components/global-notifications/global-notifications.module';
import { AnimationsModule } from './pages/animations/animations.module';

import { HomeComponent } from './pages/home/home.component';
import { RxjsPageComponent } from './pages/rxjs-page/rxjs-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { HeaderComponent } from './components/header/header.component';

import { ProfileGithubComponent } from './pages/rxjs-page/children/profile-github/profile-github.component';
import { LoginComponent } from './pages/login/login.component';
import { GlobalNotificationsService } from './services/global-notifications/global-notifications.service';

import { AppErrorHandler } from './services/app-error.handler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RxjsPageComponent,
    HeaderComponent,
    ProfileGithubComponent,
    LoginComponent,
    NotFoundComponent
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
  ],
  providers: [
    GlobalNotificationsService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { AnimationsComponent } from './pages/animations/animations.component';
import { RxjsPageComponent } from './pages/rxjs-page/rxjs-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { HeaderComponent } from './components/header/header.component';

import { RectangleCircleComponent } from './pages/animations/children/css/rectangle-circle/rectangle-circle.component';
import { CubeRectangleComponent } from './pages/animations/children/css/cube-rectangle/cube-rectangle.component';
import { SimpleLoadingBarComponent } from './pages/animations/children/css/simple-loading-bar/simple-loading-bar.component';
import {
  CubeRectangleOrangeComponent
} from './pages/animations/children/angular-animations/cube-rectangle-orange/cube-rectangle-orange.component';
import { NumberSelectComponent } from './pages/animations/children/angular-animations/number-select/number-select.component';
import { BubbleSelectComponent } from './pages/animations/children/angular-animations/bubble-select/bubble-select.component';
import { ToggleElementComponent } from './pages/animations/children/angular-animations/toggle-element/toggle-element.component';
import { ShrinkLeftComponent } from './pages/animations/children/angular-animations/shrink-left/shrink-left.component';
import { HoverExpandLeftComponent } from './pages/animations/children/css/hover-expand-left/hover-expand-left.component';
import { CreateElementComponent } from './pages/animations/children/angular-animations/create-element/create-element.component';
import { MoveLeftComponent } from './pages/animations/children/css/move-left/move-left.component';
import { MoveLeftProgComponent } from './pages/animations/children/angular-animations/move-left-prog/move-left-prog.component';
import {
  CreateRemoveElementComponent
} from './pages/animations/children/angular-animations/create-remove-element/create-remove-element.component';
import { StaggerAnimationComponent } from './pages/animations/children/angular-animations/stagger-animation/stagger-animation.component';

import { ProfileGithubComponent } from './pages/rxjs-page/children/profile-github/profile-github.component';
import { LoginComponent } from './pages/login/login.component';
import { GlobalNotificationsService } from './services/global-notifications.service';
import { GlobalNotificationsPageComponent } from './pages/global-notifications-page/global-notifications-page.component';
import { SimpleNotificationComponent } from './pages/global-notifications-page/children/simple-notification/simple-notification.component';
import {
  UltimateNotificationComponent
 } from './pages/global-notifications-page/children/ultimate-notification/ultimate-notification.component';
import { GlobalNotificationsComponent } from './components/global-notifications/global-notifications.component';
import {
  GlobalSimpleNotificationComponent
} from './components/global-notifications/children/global-simple-notification/global-simple-notification.component';
import { AppErrorHandler } from './services/app-error.handler';
import {
  GlobalTypedNotificationComponent
} from './components/global-notifications/children/global-typed-notification/global-typed-notification.component';
import {
  GlobalNotificationComponent
} from './components/global-notifications/children/global-notification/global-notification.component';
import { TypedNotificationComponent } from './pages/global-notifications-page/children/typed-notification/typed-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimationsComponent,
    RxjsPageComponent,
    RectangleCircleComponent,
    CubeRectangleComponent,
    SimpleLoadingBarComponent,
    CubeRectangleOrangeComponent,
    NumberSelectComponent,
    BubbleSelectComponent,
    ToggleElementComponent,
    ShrinkLeftComponent,
    HoverExpandLeftComponent,
    CreateElementComponent,
    MoveLeftComponent,
    MoveLeftProgComponent,
    CreateRemoveElementComponent,
    StaggerAnimationComponent,
    HeaderComponent,
    ProfileGithubComponent,
    LoginComponent,
    GlobalNotificationsPageComponent,
    SimpleNotificationComponent,
    GlobalNotificationsComponent,
    GlobalSimpleNotificationComponent,
    GlobalTypedNotificationComponent,
    TypedNotificationComponent,
    UltimateNotificationComponent,
    GlobalNotificationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    GlobalNotificationsService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

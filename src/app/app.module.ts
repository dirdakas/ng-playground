import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RectangleCircleComponent } from './animations/children/css/rectangle-circle/rectangle-circle.component';
import { CubeRectangleComponent } from './animations/children/css/cube-rectangle/cube-rectangle.component';
import { SimpleLoadingBarComponent } from './animations/children/css/simple-loading-bar/simple-loading-bar.component';

import { AnimationsComponent } from './animations/animations.component';
import { AppRoutingModule } from './app-routing.module';
import { RxjsPageComponent } from './rxjs-page/rxjs-page.component';
import { HttpClientModule } from '@angular/common/http';

import { CubeRectangleOrangeComponent } from './animations/children/angular-animations/cube-rectangle-orange/cube-rectangle-orange.component';
import { NumberSelectComponent } from './animations/children/angular-animations/number-select/number-select.component';
import { BubbleSelectComponent } from './animations/children/angular-animations/bubble-select/bubble-select.component';
import { ToggleElementComponent } from './animations/children/angular-animations/toggle-element/toggle-element.component';
import { ShrinkLeftComponent } from './animations/children/angular-animations/shrink-left/shrink-left.component';
import { HoverExpandLeftComponent } from './animations/children/css/hover-expand-left/hover-expand-left.component';
import { CreateElementComponent } from './animations/children/angular-animations/create-element/create-element.component';
import { MoveLeftComponent } from './animations/children/css/move-left/move-left.component';
import { MoveLeftProgComponent } from './animations/children/angular-animations/move-left-prog/move-left-prog.component';
import { CreateRemoveElementComponent } from './animations/children/angular-animations/create-remove-element/create-remove-element.component';
import { StaggerAnimationComponent } from './animations/children/angular-animations/stagger-animation/stagger-animation.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileGithubComponent } from './components/profile-github/profile-github.component';

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
    ProfileGithubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

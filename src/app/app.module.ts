import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { AnimationsComponent } from './pages/animations/animations.component';
import { RxjsPageComponent } from './pages/rxjs-page/rxjs-page.component';

import { HeaderComponent } from './components/header/header.component';

import { RectangleCircleComponent } from './pages/animations/children/css/rectangle-circle/rectangle-circle.component';
import { CubeRectangleComponent } from './pages/animations/children/css/cube-rectangle/cube-rectangle.component';
import { SimpleLoadingBarComponent } from './pages/animations/children/css/simple-loading-bar/simple-loading-bar.component';
import { CubeRectangleOrangeComponent } from './pages/animations/children/angular-animations/cube-rectangle-orange/cube-rectangle-orange.component';
import { NumberSelectComponent } from './pages/animations/children/angular-animations/number-select/number-select.component';
import { BubbleSelectComponent } from './pages/animations/children/angular-animations/bubble-select/bubble-select.component';
import { ToggleElementComponent } from './pages/animations/children/angular-animations/toggle-element/toggle-element.component';
import { ShrinkLeftComponent } from './pages/animations/children/angular-animations/shrink-left/shrink-left.component';
import { HoverExpandLeftComponent } from './pages/animations/children/css/hover-expand-left/hover-expand-left.component';
import { CreateElementComponent } from './pages/animations/children/angular-animations/create-element/create-element.component';
import { MoveLeftComponent } from './pages/animations/children/css/move-left/move-left.component';
import { MoveLeftProgComponent } from './pages/animations/children/angular-animations/move-left-prog/move-left-prog.component';
import { CreateRemoveElementComponent } from './pages/animations/children/angular-animations/create-remove-element/create-remove-element.component';
import { StaggerAnimationComponent } from './pages/animations/children/angular-animations/stagger-animation/stagger-animation.component';

import { ProfileGithubComponent } from './pages/rxjs-page/children/profile-github/profile-github.component';

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

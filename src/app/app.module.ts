import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
    ToggleElementComponent
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

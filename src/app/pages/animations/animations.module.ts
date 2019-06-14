import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsComponent } from './animations.component';

import {
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
} from './component-exports';

@NgModule({
  declarations: [
    AnimationsComponent,
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
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
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
  ],
  exports: [
    AnimationsComponent
  ]
})
export class AnimationsModule { }

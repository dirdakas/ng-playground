import { Component, Input, OnInit, ViewChild, ViewContainerRef, ElementRef, AfterViewInit } from '@angular/core';
import {
  AnimationEvent,
  AnimationBuilder,
  style,
  animate,
  transition,
  state,
  trigger,
  AnimationFactory,
  AnimationPlayer
} from '@angular/animations';

import { GlobalNotificationsService } from '../../../../services/global-notifications.service';

import { notificationStateTrigger } from '../../notification-animations';

import { GlobalNotification } from '../../../../interfaces/globalNotification';
import { NotificationTypeEnum } from '../../../../shared/notificationType.enum';

interface AnimationStates {
  create: AnimationFactory;
  remove: AnimationFactory;
}

interface NotificationColors {
  color: string;
  background: string;
}

@Component({
  selector: 'app-global-typed-notification',
  templateUrl: './global-typed-notification.component.html',
  styleUrls: ['./global-typed-notification.component.scss']
})
export class GlobalTypedNotificationComponent implements OnInit {
  @Input() notification: GlobalNotification;
  @ViewChild('notificationWrapper') _self: ElementRef;

  animations: AnimationStates = {
    create: null,
    remove: null
  };

  constructor(
    private globalNotificationsService: GlobalNotificationsService,
    private animationBuilder: AnimationBuilder
  ) {}


  ngOnInit() {
    this.createAnimations();

    this.playAnimation('create');
  }

  private getCreationAnimation(): AnimationFactory {
    const colors: NotificationColors = this.getNotificationColors();
    return this.animationBuilder.build([
      style({
        opacity: 0,
        backgroundColor: '#ffffff'
      }),
      animate(400, style({
        backgroundColor: 'lightblue',
        opacity: 1,
        padding: '15px 8px'
      })),
      animate(1000, style({
        backgroundColor: colors.background,
        color: colors.color,
        opacity: 1,
        padding: '10px 5px'
      }))
    ]);
  }

  private getRemovalAnimation(): AnimationFactory {
    return this.animationBuilder.build([
      style({
        opacity: 1,
        transform: 'translateY(0)'
      }),
      animate(500, style({
        opacity: 0,
        transform: 'translateY(-100px)',
        'z-index': 100
      }))
    ]);
  }

  private createAnimations(): void {
    this.animations.create = this.getCreationAnimation();
    this.animations.remove = this.getRemovalAnimation();
  }

  private playAnimation(type: string): void {
    let player: AnimationPlayer;
    if (type === 'create') {
      player = this.animations.create.create(this._self.nativeElement);
    } else if (type === 'remove') {
      player = this.animations.remove.create(this._self.nativeElement);
    }
    player.play();
  }

  private getNotificationColors(): NotificationColors {
    let result: NotificationColors = {
      background: '#ffeded', // $fair-pink
      color: '#ff6600' // $blaze-orange
    };
    switch (this.notification.type) {
      case NotificationTypeEnum.error:
        result = {
          background: '#f5c2ed', // $error-light
          color: '#d9534f' // $error-dark
        };
        break;
      case NotificationTypeEnum.warning:
        result = {
          background: '#f8fdd7', // $warning-light
          color: '#f0ad4e' // $warning-dark
        };
        break;
      case NotificationTypeEnum.info:
        result = {
          background: '#befbff', // $info-light
          color: '#5bc0de' // $info-dark
        };
        break;
      case NotificationTypeEnum.success:
        result = {
          background: '#ddfdd1', // $success-light
          color: '#5cb85c' // $success-dark
        };
        break;
      default:
        break;
    }

    return result;
  }

  closeNotification(id: number): void {
    this.playAnimation('remove');
    setTimeout(() => {
      this.globalNotificationsService.removeNotification(id);
    }, 500);
  }
}

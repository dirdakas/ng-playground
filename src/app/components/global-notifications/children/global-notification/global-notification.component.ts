import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { AnimationPlayer } from '@angular/animations';
import { FormGroup, FormBuilder } from '@angular/forms';

import { GlobalNotificationsService } from '../../../../services/global-notifications/global-notifications.service';
import { IGlobalNotification } from '../../../../interfaces/global-notification';
import { IAnimationStates } from 'src/app/interfaces/animation-states';

@Component({
  selector: 'app-global-notification',
  templateUrl: './global-notification.component.html',
  styleUrls: ['./global-notification.component.scss']
})
export class GlobalNotificationComponent implements OnInit {
  @Input() notification: IGlobalNotification;
  @ViewChild('notificationWrapper', { static: true }) _self: ElementRef;

  animations: IAnimationStates = {
    create: null,
    remove: null
  };

  extraSpace: number;
  inputForm: FormGroup;

  constructor(
    private globalNotificationsService: GlobalNotificationsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.calculateExtraSpaceNeeded();
    this.createAnimations();
    this.playAnimation('create');
    this.checkIfAutoClosing();

    if (this.notification.hasInput) {
      this.inputForm = this.fb.group({
        userInput: ''
      });
    }
  }

  closeNotification(): void {
    this.playAnimation('remove');
    setTimeout(() => {
      this.globalNotificationsService.removeNotification(this.notification.id);
    }, 500);
  }

  cancel(): void {
    if (this.notification.cancelFunction) {
      console.info('Cancel clicked with function in console log');
      this.notification.cancelFunction();
    } else {
      console.info('just alert without function');
    }
    this.closeNotification();
  }

  confirm(): void {
    if (this.notification.hasInput && this.notification.confirmFunction) {
      console.info('Confirm clicked with input and function: ' + this.inputForm.get('userInput').value);
      this.notification.confirmFunction(this.inputForm.get('userInput').value);
    } else if (this.notification.confirmFunction) {
      console.info('Confirm clicked with function in console log');
      this.notification.confirmFunction();
    } else {
      console.info('just alert without function');
    }
    this.closeNotification();
  }

  private calculateExtraSpaceNeeded(): void {
    this.extraSpace = 0;
    if (this.notification.cancelButtonText) {
      this.extraSpace++;
    }

    if (this.notification.confirmButtonText) {
      this.extraSpace++;
    }

    if (this.notification.linkTo) {
      this.extraSpace++;
    }

    if (this.notification.hasInput) {
      this.extraSpace++;
    }
  }

  private checkIfAutoClosing(): void {
    if (this.notification.closeAfter) {
      setTimeout(() => {
        this.closeNotification();
      }, this.notification.closeAfter);
    }
  }

  private createAnimations(): void {
    this.animations.create = this.globalNotificationsService.getCreationAnimation(this.notification);
    this.animations.remove = this.globalNotificationsService.getRemovalAnimation();
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
}

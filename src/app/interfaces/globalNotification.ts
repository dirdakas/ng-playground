import { AnimationFactory } from '@angular/animations';

import { NotificationTypeEnum } from '../shared/notificationType.enum';

export interface GlobalNotification {
  id: number;
  message: string;
  isClosable: boolean;
  type: NotificationTypeEnum;
  closeAfter?: number;
  linkTo?: string;
  cancelButtonText?: string;
  cancelFunction?: Function;
  confirmButtonText?: string;
  confirmFunction?: Function;
  hasInput?: boolean;
  isUltimante: boolean;
}

export interface AnimationStates {
  create: AnimationFactory;
  remove: AnimationFactory;
}

export interface NotificationColors {
  color: string;
  background: string;
}

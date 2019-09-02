import { NotificationTypeEnum } from '../enums/notificationType.enum';

export interface IGlobalNotification {
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

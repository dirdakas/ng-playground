import { NotificationTypeEnum } from '../shared/notificationType.enum';

export interface GlobalNotification {
  id: number;
  message: string;
  isClosable?: boolean;
  type: NotificationTypeEnum;
}

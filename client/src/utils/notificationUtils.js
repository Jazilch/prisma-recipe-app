'use es6';

import { message } from 'antd';

export const showSuccessNotification = successMessage =>
  message.success(`${successMessage}`);

export const showErrorNotification = () =>
  message.error('Something went wrong!');

'use es6';

import { message } from 'antd';

export const showSuccessNotification = () =>
  message.success('Successfully updated recipe');

export const showErrorNotification = () =>
  message.error("Something went wrong! Couldn't update recipe");

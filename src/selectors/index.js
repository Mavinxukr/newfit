import { createSelector } from 'reselect';

export const contentNotification = createSelector(
  (state) => state.notification.content,
  (content) => content,
);

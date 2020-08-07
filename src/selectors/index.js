import { createSelector } from 'reselect';

export const userDataSelector = createSelector(
  (state) => state.user.data,
  (data) => data,
);

export const isAuthSelector = createSelector(
  (state) => state.user.isAuth,
  (isAuth) => isAuth,
);

export const isLoadingSelector = createSelector(
  (state) => state.loader.isLoading,
  (isLoading) => isLoading,
);

export const isShowedNotification = createSelector(
  (state) => state.notification.isShowed,
  (isShowed) => isShowed,
);

export const contentNotification = createSelector(
  (state) => state.notification.content,
  (content) => content,
);

export const financeSelector = createSelector(
  (state) => state.finance.data,
  (data) => data,
);

export const userCardSelector = createSelector(
  (state) => state.userCard.data,
  (data) => data,
);

export const incomeSelector = createSelector(
  (state) => state.income.data,
  (data) => data,
);

export const groupTrainingSelector = createSelector(
  (state) => state.groupTraining.data,
  (data) => data,
);

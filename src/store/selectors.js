import {createSelector} from "reselect";

export const Selector = {
  getUsers: createSelector(
      (state) => state.users,
      (users) => users
  ),
  getUser: createSelector(
      (state) => state.user,
      (user) => user
  ),
  getLoadIndicator: {
    isUserListLoaded: createSelector(
        (state) => state.loadIndicator.isUserListLoaded,
        (isUserListLoaded) => isUserListLoaded
    ),
    isUserLoaded: createSelector(
        (state) => state.loadIndicator.isUserLoaded,
        (isUserLoaded) => isUserLoaded
    ),
  },
};

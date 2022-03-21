import {createSelector} from "reselect";
import {PROP_NAMES, SortType} from "../const";
import {compareProps} from "../utility";

const getUsersSelector = createSelector(
    (state) => state.users,
    (users) => users
);

const getUserSelector = createSelector(
    (state) => state.user,
    (user) => user
);

const getLoadIndicatorSelector = {
  isUserListLoaded: createSelector(
      (state) => state.loadIndicator.isUserListLoaded,
      (isUserListLoaded) => isUserListLoaded
  ),
  isUserLoaded: createSelector(
      (state) => state.loadIndicator.isUserLoaded,
      (isUserLoaded) => isUserLoaded
  ),
};

const getSortTypeSelector = createSelector(
    (state) => state.sortType,
    (sortType) => sortType
);

const getSortedUsersSelector = createSelector(
    [getUsersSelector, (_, sortType) => sortType],
    (users, sortType) => {
      switch (sortType) {
        case SortType.CITY:
          return users.slice().sort(compareProps(PROP_NAMES[SortType.CITY]));
        case SortType.COMPANY:
          return users.slice().sort(compareProps(PROP_NAMES[SortType.COMPANY]));
        default:
          return users;
      }
    }
);

export {
  getUsersSelector,
  getUserSelector,
  getLoadIndicatorSelector,
  getSortTypeSelector,
  getSortedUsersSelector,
};

import {Action} from "./action";

export const ApiActions = {
  fetchUserList: () => (next, _getState, api) => {
    api.getUsers().then((users) => next(Action.getUsers(users)));
  },

  fetchUser: () => (next, _getState, api) => {
    api.getUser().then((user) => next(Action.getUser(user)));
  },
};

import {Action} from "./action";

export const ApiActions = {
  fetchUserList: () => (next, _getState, api) => {
    api.getUsers().then((users) => next(Action.getUsers(users)));
  },

  fetchUser: (id) => (next, _getState, api) => {
    api.getUser(id).then((user) => next(Action.getUser(user)));
  },

  /* eslint-disable no-console */
  postProfileUpdate: (update) => (_next, _getState, _api) => {
    const result = JSON.stringify(update);
    console.log(result);
  },
};

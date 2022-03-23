import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  GET_USERS: `main/getUsers`,
  GET_USER: `main/getUser`,
  CLEAR_USER_DATA: `user/ClearData`,
  CHANGE_SORT_TYPE: `sort/changeSortType`,
};

export const Action = {
  getUsers: createAction(ActionType.GET_USERS, (users) => ({payload: users})),
  getUser: createAction(ActionType.GET_USER, (user) => ({payload: user})),
  clearUserData: createAction(ActionType.CLEAR_USER_DATA),
  changeSortType: createAction(ActionType.CHANGE_SORT_TYPE, (sortType) => ({
    payload: sortType,
  })),
};

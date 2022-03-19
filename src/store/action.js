import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  GET_USERS: `main/getUsers`,
  GET_USER: `main/getUser`,
};

export const Action = {
  getUsers: createAction(ActionType.GET_USERS, (users) => ({payload: users})),
  getUser: createAction(ActionType.GET_USER, (user) => ({payload: user})),
};

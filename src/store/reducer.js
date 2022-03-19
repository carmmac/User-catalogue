import {createReducer} from "@reduxjs/toolkit";
import {Action} from "./action";

const initialState = {
  users: [],
  user: {},
  loadIndicator: {
    isUserListLoaded: false,
    isUserLoaded: false,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Action.getUsers, (state, action) => {
      state.users = action.payload;
      state.loadIndicator.isUserListLoaded = true;
    })
    .addCase(Action.getUser, (state, action) => {
      state.user = action.payload;
      state.loadIndicator.isUserLoaded = true;
    });
});

export default reducer;

import {createReducer} from "@reduxjs/toolkit";
import {SortType} from "../const";
import {Action} from "./action";

const DEFAULT_SORT_TYPE = SortType.NONE;

const initialState = {
  users: [],
  user: {},
  loadIndicator: {
    isUserListLoaded: false,
    isUserLoaded: false,
  },
  sortType: DEFAULT_SORT_TYPE,
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
    })
    .addCase(Action.clearUserData, (state) => {
      state.user = initialState.user;
      state.loadIndicator.isUserLoaded =
        initialState.loadIndicator.isUserLoaded;
    })
    .addCase(Action.changeSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export default reducer;

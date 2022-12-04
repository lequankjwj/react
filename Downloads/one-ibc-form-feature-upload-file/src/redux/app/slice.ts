import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  counter: number;
  user: object;
  headerMenu: [];
  footerMenu: [];
  listServices: [];
  listUpdateSectionInsights: [];
}

const initialState: State = {
  counter: 0,
  user: {},
  headerMenu: [],
  footerMenu: [],
  listServices: [],
  listUpdateSectionInsights: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCounter(state, { payload }: PayloadAction<number>) {
      state.counter = payload;
    },
    setUser(state, { payload }: PayloadAction<any>) {
      state.user = payload;
    },
    setMenuHeader(state, { payload }: PayloadAction<any>) {
      state.headerMenu = payload;
    },
    setFooterMenu(state, { payload }: PayloadAction<any>) {
      state.footerMenu = payload;
    },
    setListService(state, { payload }: PayloadAction<any>) {
      state.listServices = payload;
    },
    setListUpdateSectionInsights(state, { payload }: PayloadAction<any>) {
      state.listUpdateSectionInsights = payload;
    },
  },
});

export const {
  setCounter,
  setUser,
  setMenuHeader,
  setFooterMenu,
  setListService,
  setListUpdateSectionInsights,
} = appSlice.actions;

export default appSlice;

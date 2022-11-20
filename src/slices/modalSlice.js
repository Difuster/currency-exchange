import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: {
    type: 'from',
    status: 'hidden',
  },
};
/* eslint-disable no-param-reassign */
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalStatus: (state, action) => {
      state.modal.status = action.payload;
    },
    setModalType: (state, action) => {
      state.modal.type = action.payload;
    }
  }
});
/* eslint-enable no-param-reassign */
const selectModalStatus = (state) => state.modal.modal.status;
const selectModalType = (state) => state.modal.modal.type;

export const { actions } = modalSlice;
export { selectModalStatus, selectModalType };

export default modalSlice.reducer;

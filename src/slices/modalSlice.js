import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: {
    type: 'from',
    status: 'hidden',
  },
};

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

const selectModalStatus = (state) => state.modal.modal.status;
const selectModalType = (state) => state.modal.modal.type;

export const { actions } = modalSlice;
export { selectModalStatus, selectModalType };

export default modalSlice.reducer;

import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, phone) {
        return {
          payload: {
            name,
            phone,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});
export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContact,
  deleteContact,
} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

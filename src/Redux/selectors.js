export const selectTasks = state => state.contacts.items;

export const selectStatusFilter = state => state.filters;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

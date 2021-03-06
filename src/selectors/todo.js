
export const todoSelector = store => store.todo;

export const todoIdsSelector = store => todoSelector(store)?.allIds || [];

export const todoByIdSelector = (store, id) => todoSelector(store) ? {
    ...todoSelector(store).byIds[id], id
} : {};

export const todosSelector = store => todoIdsSelector(store).map(id => todoByIdSelector(store, id));

export const todoListLoadingSelector = store => todoSelector(store)?.loading;

export const todoListErrorSelector = store => todoSelector(store)?.error;

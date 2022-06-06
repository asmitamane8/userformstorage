const initialState = { list: [] };

export const userreducer = (state = initialState.list, action) => {
  switch (action.type) {
    case "ADD_USERS":
      state = [...state, action.payload];
      return state;
    case "DELETE_USERS":
      const contactFilter = state.filter((users) =>
        users.id === action.payload ? null : users
      );
      state = contactFilter;
      return state;
    case "UPDATE_USERS":
      const contactUpdate = state.filter((users) =>
        users.id === action.payload.id
          ? Object.assign(users, action.payload)
          : users
      );
      state = contactUpdate;
      return state;
    case "RESET_USERS":
      state = [{ firstname: null, lastname: null, email: null, contact: null }];
      return state;
    default:
      return state;
  }
};

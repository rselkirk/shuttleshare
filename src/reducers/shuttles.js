// Shuttles reducer

const shuttlesReducerDefaultState = [];

export default (state = shuttlesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_SHUTTLE':
      console.log("shuttle added")
      console.log(action.shuttle);
      return [
        ...state,
        action.shuttle
      ];
    case 'REMOVE_SHUTTLE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_SHUTTLE':
      return state.map((shuttle) => {
        if (shuttle.id === action.id) {
          return {
            ...shuttle,
            ...action.updates
          };
        } else {
          return shuttle;
        };
      });
    default:
      return state;
  }
};

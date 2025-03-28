const checker = (store) => (next) => (action) => {
  if (action.type === ADD_TODO) {
    alert(`Don't forget to  ${action.todo.name}!`);
  }

  if (action.type === ADD_GOAL) {
    alert("That's a great goal!");
  }

  return next(action);
};

const store = Redux.createStore(
  Redux.combineReducers({
    todos,
    goals,
  }),
  Redux.applyMiddleware(checker)
);

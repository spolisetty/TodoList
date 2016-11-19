const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM'
}

export const actionCreators = {
  addItem: (todo) => {
    return {type: types.ADD_ITEM, payload: todo}
  },
  removeItem: (index) => {
    return {type: types.REMOVE_ITEM, payload: index}
  }
}

const initialState = {
  todos: [],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type) {
    case 'ADD_ITEM':
      return {
              todos: [
                ...state.todos,
                payload
              ]
            }
    case 'REMOVE_ITEM':
      return {
        todos: [
          ...state.todos.filter( (todoItem, i) => i !== payload)
        ]
      }
    default: {
      return state
    }
  }
}

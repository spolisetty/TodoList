const types = {
  ADD_ITEM: 'ADD_ITEM'
}

export const actionCreators = {
  addItem: (todo) => {
    return {type: types.ADD_ITEM, payload: todo}
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
    default: {
      return state
    }
  }
}

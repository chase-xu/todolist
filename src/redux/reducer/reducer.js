const initialState = {
    todos: [
      { id: 0, text: 'Learn React', completed: true, state: 'completed' },
      { id: 1, text: 'Learn Redux', completed: false, color: 'purple' , state: 'incompleted'},
      { id: 2, text: 'Build Own Project!', completed: false, color: 'blue' , state: 'progressing'},
      { id: 3, text: 'Build Own Project!', completed: false, color: 'blue' , state: 'incompleted'}
    ],
    filters: {
      status: 'All',
      colors: []
    }
  }
  
  // Use the initialState as a default value
  export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      case 'todos/todoAdded': {
        // We need to return a new state object
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
          todos: [
            // with all of the old todos
            ...state.todos,
            // and the new todo object
            {
              // Use an auto-incrementing numeric ID for this example
              id: state.todos,
              text: action.payload,
              completed: false
            }
          ]
        }
      }
      case 'todos':{
        const index = state.todos.findIndex((obj=>obj.id === Number(action.id)));
        let newTodos = [...state.todos];
        newTodos[index] = {...newTodos[index], state: 'incompleted'}
        return {
          ...state,
          todos: [
            ...newTodos
          ]
        }
      }

      case 'progressing':{
        const index = state.todos.findIndex((obj=>obj.id === Number(action.id)));
        let newTodos = [...state.todos];
        newTodos[index] = {...newTodos[index], state: 'progressing'}
        return {
          ...state,
          todos: [
            ...newTodos
          ]
        }
      }

      case 'done':{
        const index = state.todos.findIndex((obj=>obj.id === Number(action.id)));
        let newTodos = [...state.todos];
        newTodos[index] = {...newTodos[index], state: 'completed'}
        return {
          ...state,
          todos: [
            ...newTodos
          ]
        }
      }


      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }
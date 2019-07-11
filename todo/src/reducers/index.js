import { ADDTODO, TOGGLE } from '../actions';

export default ( state = [], action ) => {
    switch ( action.type ) {
        case ADDTODO:
          return state.concat( action.payload );
        case TOGGLE:
          return state.map( todo => {
              if ( todo.id === action.payload ) {
                  return Object.assign({}, todo, {
                      completed: !todo.completed
                  });
              }
              return todo;
          });
          default:
            return state;
    }
};
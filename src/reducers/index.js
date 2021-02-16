import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_ADD, MEMORY_RECORD, MEMORY_CLEAR} from './../actions';

// export const initialState = {
//     total: 100,
//     operation: "*",
//     memory: 100
// };

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
};

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
};

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

            case(CLEAR_DISPLAY):
              return({
                  ...state,
                  total:state.total * 0
              });

              case(MEMORY_ADD):
              return({...state, memory: state.currentValues});

              case(MEMORY_RECORD):
              return({...state, total: state.memory});

              case(MEMORY_CLEAR):
              return({ ...state,
                total:state.total * 0});

            
        default:
            return state;
    }
};

export default reducer;
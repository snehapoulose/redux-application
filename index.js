// console.log("From index.js");
const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators =redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function orderCake(){                     //action creator
    return{
        type:CAKE_ORDERED,
        quantity:1
    }
}
function restockCake(qua=1) {
    return{
        type:CAKE_RESTOCKED,
        quantity:qua
    }
}
function orderIceCream(qty=1){
    return{
        type:ICECREAM_ORDERED,
        payload:qty
    }
}
function restockIceCream(qty=1){
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty
    }
}
// const initalState = {    //store
//     numberOfCakes:10,
//     numberOfIceCream:20,
// }
const initalCakeState = {
    numberOfCakes:10,
}
const initalIceCreamState = {
    numberOfIceCreams:20,
}
// (prevState,action)=>newState
const cakeReducer = (state = initalCakeState,action) =>{         //reducer
    switch(action.type){
        case CAKE_ORDERED:
          return{
            ...state,
            numberOfCakes:state.numberOfCakes-1,
          }
          case CAKE_RESTOCKED:
            return{
                ...state,
                numberOfCakes:state.numberOfCakes + action.quantity ,
            }
          default:
            return state
            
    }
}
const iceCreamReducer = (state = initalIceCreamState,action) =>{         //reducer
    switch(action.type){
            case ICECREAM_ORDERED:
                return{
                  ...state,
                  numberOfIceCreams:state.numberOfIceCreams-1,
                }
                case ICECREAM_RESTOCKED:
                  return{
                      ...state,
                      numberOfIceCreams:state.numberOfIceCreams + action.payload ,
                  }
          default:
            return state
            
    }
}
const rootReducers = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
})
const store = createStore(rootReducers) //Holds application state
console.log("Intial State", store.getState()) // allows access state  via getState()
 const unsubscribe = store.subscribe(() => console.log("Update State", store.getState()))
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(7))
store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(restockIceCream(6))
// const actions = bindActionCreators((orderCake,restockCake),store.dispatch)
// actions.orderCake()
// actions.orderCake()
// actions.orderCake()
// actions.restockCake(4)
unsubscribe();
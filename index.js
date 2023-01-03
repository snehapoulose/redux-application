// console.log("From index.js");
const redux = require('redux');
const createStore = redux.createStore;
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
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
const initalState = {    //store
    numberOfCakes:10,
}
// (prevState,action)=>newState
const reducer = (state = initalState,action) =>{
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
const store = createStore(reducer) //Holds application state
console.log("Intial State", store.getState()) // allows access state  via getState()
 const unsubscribe = store.subscribe(() => console.log("Update State", store.getState()))
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(7))
unsubscribe();
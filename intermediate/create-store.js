//LIBRARY CODE

//Create a sample data store
function createStore(reducer){

    /*
     * The store should have four parts
     *
     * 1. The state
     * 2. Get the state
     * 3. Listen to changes in the state
     * 4. Update the state
     * 
     */

    let state

    let listeners = []

    const getState = () => state

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener() )
    }

    return {
        getState,
        subscribe,
        dispatch
    }

}


//APP CODE
function todos(state = [], action){

    switch(action.type){
        case 'ADD_TODO' :
            return state.concat([action.todo]) 
        case 'REMOVE_TODO' :
            return state.filter((todo) => todo.id !== action.id)
        case 'TOGGLE_TODO' :
            return state.map((todo) => todo.id !== action.id ? todo:
            Object.assign({}, todo, {complete: !todo.complete}))
        default:
            return state
    }

    /*
    if(action.type === 'ADD_TODO'){
        return state.concat([action.todo]) 
    }else if(action.type === 'REMOVE_TODO'){
        return state.filter((todo) => todo.id !== action.id)
    }else if(action.type === 'TOGGLE_TODO'){
        return state.map((todo) => todo.id !== action.id ? todo:
            Object.assign({}, todo, {complete: !todo.complete})
        )
    }else{
        return state
    }
    */
}


function goals(state = [], action){
    switch(action.type){
        case 'ADD_GOAL' :
            return state.concat([action.goal]) 
        case 'REMOVE_GOAL' :
            return state.filter((goal) => goal.id !== action.id)
        default:
            return state
    }
}

function app(){}

const store = createStore(todos)
store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false
    }
})

//Create a sample data store

function createStore(){

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

    return {
        getState,
        subscribe
    }

}
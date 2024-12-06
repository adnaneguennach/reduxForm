

const initialState = {
    users : []
}


const reducerFunction = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_USER":
            return {users : [...state.users, {...action.payload, id : state.users.length + 1}]}
        case "DELETE_USER":
            return { users : state.users.filter((e)=> e.id !== action.payload)}
        default: 
            return state;
            
    }
}


export default reducerFunction
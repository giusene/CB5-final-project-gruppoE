import { actions } from "./actions";
const mainReducer= (state,action) =>{
    switch(action.type){
        case actions.SELECT_USER:
            return{
                ...state,
                currentUser: state.users.includes()

                
            }
        default: 
        return state;

     }
}

export default mainReducer;

// user => 
//                     user.userName === action.payload && 
//                     user.password === action.payload ? 
//                     'ciao': 'utente non trovato')
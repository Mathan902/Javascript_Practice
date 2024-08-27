import { LOGIN, LOGOUT } from "./ActionType"

const userReducer = (state = intialValues,action)=>{
    switch(action.type){
        case LOGIN :
            return({loginStatus : true,user_email : action.email,user_password : action.password}
            );
        case LOGOUT:
            return(
                state.loginStatus = false,
                state.user_email = '',
                state.user_password = ''
            );
        default:
            return state;
    }
}
const intialValues = {
    loginStatus : false,
    user_email : '',
    user_password : ''
}
export default userReducer;
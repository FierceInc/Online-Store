export const initialState = {
    userEmail: "",
    Password: "",
    username: "",
    PasswordConfirmation: "",
    isLoading: "none",
    errorDisplay: "none",
    error: "",
}
export const signUpReducer = (state, action) => {
switch(action.type) {
    case "field": 
    return {
        ...state,
        [action.field]: action.value,
    }
    case "signup": 
     return {
         ...state,
         isLoading: "block",
         errorDisplay: "none",
         error: "",
     }
     case "success":
         return {
            ...state,
            isLoading: "none",
            errorDisplay: "none",
            error: "",
         }
         case "error":
             return {
                 ...state,
                 isLoading: "none",
                 errorDisplay: "block",
                 error: action.value,
             }
             case "waiting": 
             return {
                 ...state,
                 errorDisplay: "none",
                 error: "",
                 isLoading: "none",
             }
    default:
    break;
}
}
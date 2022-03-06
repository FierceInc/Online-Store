export const initialState = {
    userEmail: "",
    Password: "",
    error: "none",
    errorMessage: "",
    isLoading: "none",
}
export const loginReducer = (state,action) => {
 switch(action.type) {
     case "field": 
     return {
         ...state,
         [action.field]: action.value,
     }
    case "login":
        return {
            ...state, 
            isLoading: "block",
            error: "none",
            errorMessage: "",
        }
    case "success": 
    return {
        ...state, 
        isLoading: "none",
        error: 'none',
        errorMessage: "",
    }
    case "error": 
    return {
        ...state,
        isLoading: "none",
        errorMessage: action.value.slice(5).replace(/-/g, " "),
        error: "block",
    }
    case "waiting": 
    return {
        ...state,
        error: "none",
        errorMessage: "",
        isLoading: "none",
    }
    default:
        throw new Error()
 }
}
export const initialUser = {
    client_id: 0,
    username: "",
    email: "",
    token: "",
  };

export const userReducer = (state, action) =>{
    switch (action.type) {
        case "SET_USER": return action.payload;

        case "RESET_USER": return initialUser;

        default:
            return state;
    }
}
export const initialUser = {
    client_id: 0,
    name: "",
    last_name: "",
    dni: "",
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
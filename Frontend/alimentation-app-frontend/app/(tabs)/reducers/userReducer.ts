export interface activeUser {
    id: number;
    username: string;
    email: string;
    token: string;
}

export const initialUser: activeUser = {
    id: 0,
    username: "",
    email: "",
    token: "",
  };

export type actionsUser =  | { type: "SET_USER"; payload: activeUser } | { type: "RESET_USER" };

export const userReducer = (state: activeUser, action: actionsUser) : activeUser =>{
    switch (action.type) {
        case "SET_USER": return action.payload;

        case "RESET_USER": return initialUser;

        default:
            return state;
    }
}
import { User } from "../user.model";
import * as AuthActions from "./auth.actions";

export interface State {
  user: User;
}

const initialState: State = {
  user: null,
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  // console.log(state);
  switch (action.type) {
    case AuthActions.LOGIN:
      const user = new User(
        action.payolad.email,
        action.payolad.userId,
        action.payolad.token,
        action.payolad.expirationDate
      );
      return {
        ...state,
        user: user,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

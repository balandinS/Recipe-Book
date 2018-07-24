import * as AuthAction from './auth.action';
export interface State {
    token: string;
    authinvacted: boolean;
   }
   const initialState: State = {
       token: null,
       authinvacted: false
   };

   export function redacersAuth(state = this.initialState, action: AuthAction.AuthActions) {
       switch (action.type) {
           case AuthAction.SIGNUP:
           case AuthAction.SIGNIN:
            return {
                ...state,
                authinvacted: true
            };
            case AuthAction.LOGOUT:
            return {
                ...state,
                token: null,
                authinvacted: false
            };

           default : {
               return state;
           }
       }
   }

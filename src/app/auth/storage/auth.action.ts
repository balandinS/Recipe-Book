import { Action } from '@ngrx/store';

export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class Signin implements Action {
    readonly type = SIGNIN;
}

export class Signout implements Action {
    readonly type = SIGNUP;
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;
    constructor(public playload: string) {}
}

export type AuthActions =
 Signin   |
 Signout  |
 Logout   |
 SetToken;

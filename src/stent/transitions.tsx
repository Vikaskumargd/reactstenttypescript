import { call } from "stent/lib/helpers";
import { CONNECTION_ERROR } from "../services/Errors";
import Auth from "../services/Auth";
import { LOGIN_FORM, LOADING, TRY_AGAIN, WRONG_CREDENTIALS, PROFILE } from "./states";
import { LoginState, LoginUser, User } from "../models";

const success: Function = (state: LoginState, user: User): any => {
    return { name: PROFILE, user };
};

const errorComes: Function = (state: LoginState, error: any, credentials: LoginUser): any => {
    return error.message === CONNECTION_ERROR ?
        { name: TRY_AGAIN, credentials } :
        { name: WRONG_CREDENTIALS, error };
};

// tslint:disable-next-line: typedef
const submit: Function = function* (state: LoginState, credentials: LoginUser) {
    yield LOADING;
    try {
        const user: any = yield call(Auth.login, credentials);
        yield success(state, user);
    } catch (error) {
        yield errorComes(state, error, credentials);
    }
};

// tslint:disable-next-line: typedef
const tryAgain: Function = function* (state: LoginState) {
    yield call(submit, state, state.credentials);
};

const transitions: any = {
    [LOGIN_FORM]: {
        "submit": submit
    },
    [LOADING]: {
        "success ": success,
        "error ": errorComes
    },
    [TRY_AGAIN]: {
        "try again": tryAgain,
        "reset login": LOGIN_FORM
    },
    [WRONG_CREDENTIALS]: {
        "submit": submit
    },
    [PROFILE]: {

        // tslint:disable-next-line: no-empty
        "view profile ": () => { },
        "logout ": LOGIN_FORM
    }

};

export default transitions;
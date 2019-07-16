import { Machine } from "stent";
import { LOGIN_FORM } from "./states";
import { LoginState } from "../models";
import transitions from "./transitions";

const InitialState: LoginState = {
    name: LOGIN_FORM, credentials: {
        username: "",
        password: ""
    }, user: { name: "" }
};
const machine: any = Machine.create(
    "LoginFormSM",
    { state: InitialState, transitions }
);
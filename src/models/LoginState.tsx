import { User } from "../models/User";
import { LoginUser } from "../models/LoginUser";

export class LoginState {
    credentials?: LoginUser;
    user?: User;
    name: string = "";
}
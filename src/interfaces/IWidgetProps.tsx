import { LoginUser } from "../models";

export interface IWidgetProps {
    login: (user: LoginUser) => void;
    tryAgain: () => void;
    logout: () => void;
    state: string;
    resetLogin: () => void;
    viewProfile: () => void;
}
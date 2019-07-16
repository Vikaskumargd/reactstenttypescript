import { CONNECTION_ERROR, VALIDATION_ERROR } from "./Errors";
import { LoginUser, User } from "../models";
const TIMEOUT: number = 1000;
const USER: User = { name: "Navneet Sharma" };

const Auth: any = {
    login: ({ username, password }: LoginUser): Promise<any> => {
        return new Promise(
            (resolve, reject) => setTimeout(() => {
                if (username === "" || password === "") {
                    return reject(new Error(VALIDATION_ERROR));
                } else if (username === "z" && password === "z") {
                    return reject(new Error(CONNECTION_ERROR));
                }
                resolve(USER);
            }, TIMEOUT)
        );
    }
};

export default Auth;
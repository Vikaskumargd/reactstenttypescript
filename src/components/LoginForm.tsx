import React from "react";
import { LoginUser } from "../models";

interface ILogin {
    submit: (user: LoginUser) => void;
}


export default class LoginForm extends React.Component<ILogin> {

    submit = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        this.props.submit({
            username: (this.refs.username as HTMLInputElement).value,
            password: (this.refs.password as HTMLInputElement).value
        });
    }
    render = (): any => {
        return (
            <form>
                <input type="text" ref="username" placeholder="Username" />
                <input type="password" ref="password" placeholder="Password" />
                <button onClick={event => this.submit(event)}>Submit</button>
            </form>
        );
    }
}


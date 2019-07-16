import React, { Requireable } from "react";
import Link from "./Link";
import { connect } from "stent/lib/react";
import { LoginUser } from "../models";

interface IErrorProps {
    message: Requireable<string>;
    tryAgain: (event: React.MouseEvent<HTMLButtonElement>) => void;
    resetLogin: () => void;
}

const defaultProps: any = {
    message: "Ops ..."
};


const Error: React.FunctionComponent<IErrorProps> = (props) => {
    const propsPrivate: IErrorProps = { ...defaultProps, ...props };

    return <div>
        <p >{propsPrivate.message}</p>
        <Link onClick={() => propsPrivate.resetLogin()}>Try again</Link>
    </div>;
};


Error.defaultProps = defaultProps;

export default connect(Error)
    .with("LoginFormSM")
    .map((machine: { state: { credentials: LoginUser; }; }) => ({
        credentials: machine.state.credentials,
    }));
import React from "react";
import Link from "./Link";
import { connect } from "stent/lib/react";
import { User } from "../models";

interface IProfileProps {
    logout: () => void;
    user: User;
    viewProfile: () => void;
}

class Profile extends React.Component<IProfileProps> {
    render = (): any => {
        return (
            <div>
                Welcome, {this.props.user.name}
                <hr />
                <Link onClick={this.props.viewProfile}>Profile</Link><br />
                <Link onClick={this.props.logout}>Log out</Link><br />
            </div>
        );
    }

}


export default connect(Profile)
    .with("LoginFormSM")
    .map((machine: { state: { user: User; }; }) => ({
        user: machine.state.user,
    }));

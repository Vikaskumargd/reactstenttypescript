import React from "react";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import Error from "./Errors";
import { connect } from "stent/lib/react";
import { LOGIN_FORM, LOADING, TRY_AGAIN, WRONG_CREDENTIALS, PROFILE } from "../stent/states";
import { IWidgetProps } from "../interfaces/IWidgetProps";


class Widget extends React.Component<IWidgetProps> {
    renderMap = {
        [LOGIN_FORM]: <LoginForm submit={this.props.login} />,
        [LOADING]: <p className="tac">Loading. please wait.</p>,
        [TRY_AGAIN]: <Error resetLogin={this.props.resetLogin} tryAgain={this.props.tryAgain} message="Connection problem!" />,
        [WRONG_CREDENTIALS]: (
            <div>
                <LoginForm submit={this.props.login} />
                <p className="error">Missing or invalid data.</p>
            </div>
        ),
        [PROFILE]: <Profile viewProfile={this.props.viewProfile} logout={this.props.logout} />
    };

    render = (): any => {
        return this.renderMap[this.props.state];
    }
}

export default connect(Widget)
    .with("LoginFormSM")
    .map(machine => ({
        login: machine.submit,
        tryAgain: machine.tryAgain,
        resetLogin: machine.resetLogin,
        logout: machine.logout,
        state: machine.state.name,
        viewProfile: machine.viewProfile
    }));


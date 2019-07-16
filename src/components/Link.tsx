import React from "react";

interface ILinkProps {
    onClick: () => void;
}


export default class Link extends React.Component<ILinkProps> {
    handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        this.props.onClick();
    }

    render = (): any => {
        return (<a href="#" onClick={event => this.handleClick(event)}>{this.props.children}</a>);
    }
}

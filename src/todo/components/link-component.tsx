import React, { PropTypes } from "react";

interface LinkComponentProps {
    active: boolean;
    children: number | string | Element | number[] | string[] | Element[];
    onClick: () => void;
}

export const LinkComponent = (props: LinkComponentProps) => {

    const renderLink = () => {
        return (<a className="active" href="#"
            onClick={e => { handeOnClick(e); } }>
            {props.children}
        </a>);
    };

    const renderNoLink = () => {
        return <span className="non-active">{props.children}</span>;
    };

    const handeOnClick = (e: any) => {
        e.preventDefault();
        props.onClick();
    };

    return (<div className="link-component">
        {props.active ? renderLink() : renderNoLink()}
    </div>);
};

import * as React from "react";

export interface FilterLinkComponentProps {
    active: boolean;
    children: number | string | Element | number[] | string[] | Element[];
    onClick: () => void;
}

export const FilterLinkComponent = (props: FilterLinkComponentProps) => {

    const renderWithAction = () => {
        return (<a className="active" href="#"
            onClick={e => { handeOnClick(e); } }>
            {props.children}
        </a>);
    };

    const renderWithNoAction = () => {
        return <span className="non-active">{props.children}</span>;
    };

    const handeOnClick = (e: any) => {
        e.preventDefault();
        props.onClick();
    };

    return (<div className="link-component">
        {props.active ? renderWithNoAction() : renderWithAction()}
    </div>);
};

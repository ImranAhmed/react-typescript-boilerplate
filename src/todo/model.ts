export interface ActionBase {
    type: string;
}

export interface StateBase {
    state?: string;
}

interface TodoPayload {
    id?: number;
    completed?: boolean;
    text?: string;
}

export interface TodoState extends TodoPayload, StateBase {
}

export interface TodoAction extends TodoPayload, ActionBase {
}

export interface Todo {
    id: number;
    completed: boolean;
    text: string;
}
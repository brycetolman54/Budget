import { v4 } from "uuid";

const SUCCESS_STATUS_TITLE = "Success";
const ERROR_STATUS_TITLE = "Error";
const INFO_STATUS_TITLE = "Info";

export enum StatusType {
    Other = 0,
    Success = 1,
    Error = 2,
    Info = 3,
}

export interface Status {
    id: string;
    title: string;
    text: string;
    type: StatusType;
    timeout: number;
}

export const makeStatus = (
    title: string,
    text: string,
    duration: number = 0,
    type: StatusType = StatusType.Other
) => {
    return {
        id: v4().toString(),
        title: title,
        text: text,
        type: type,
        timeout: duration > 0 ? Date.now() + duration : 0,
    };
};

export const makeSuccessStatus = (
    text: string,
    duration: number = 0
): Status => {
    return makeStatus(SUCCESS_STATUS_TITLE, text, StatusType.Success, duration);
};

export const makeErrorStatus = (text: string, duration: number = 0): Status => {
    return makeStatus(ERROR_STATUS_TITLE, text, StatusType.Error, duration);
};

export const makeInfoStatus = (text: string, duration: number = 0): Status => {
    return makeStatus(INFO_STATUS_TITLE, text, StatusType.Info, duration);
};

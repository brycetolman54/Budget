import { v4 } from "uuid";

const SUCCESS_STATUS_TITLE = "Success";
const ERROR_STATUS_TITLE = "Error";
const INFO_STATUS_TITLE = "Info";
const WARNING_STATUS_TITLE = "Warning";

export enum StatusType {
    Success = 0,
    Error = 1,
    Info = 2,
    Warning = 3,
    Other = 4,
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
    type: StatusType = StatusType.Other,
    duration: number
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

export const makeWarningStatus = (
    text: string,
    duration: number = 0
): Status => {
    return makeStatus(WARNING_STATUS_TITLE, text, StatusType.Warning, duration);
};

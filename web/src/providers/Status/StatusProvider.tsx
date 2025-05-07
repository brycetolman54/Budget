import { Context, createContext, useContext, useState } from "react";
import {
    Status,
    makeStatus,
    makeSuccessStatus,
    makeErrorStatus,
    makeInfoStatus,
} from "./Status";

interface StatusSet {
    statusList: Status[];
    displayStatus: (title: string, text: string, duration?: number) => void;
    displaySuccessStatus: (text: string, duration?: number) => void;
    displayErrorStatus: (text: string, duration?: number) => void;
    displayInfoStatus: (text: string, duration?: number) => void;
    deleteStatus: (id: string) => void;
    deleteAllStatuses: () => void;
}

const defaultStatusSet: StatusSet = {
    statusList: [],
    displayStatus: (title: string, text: string, duration?: number) => null,
    displaySuccessStatus: (text: string, duration?: number) => null,
    displayErrorStatus: (text: string, duration?: number) => null,
    displayInfoStatus: (text: string, duration?: number) => null,
    deleteStatus: (id: string) => null,
    deleteAllStatuses: () => null,
};

const StatusContext: Context<StatusSet> =
    createContext<StatusSet>(defaultStatusSet);

interface Props {
    children: React.ReactNode;
}

const StatusProvider = ({ children }: Props) => {
    const [statusSet, setStatusSet] = useState(defaultStatusSet);

    const addStatus = (status: Status) => {
        const { statusList } = statusSet;
        statusList.push(status);
        setStatusSet({ ...statusSet, statusList });
    };

    const displayStatus = (title: string, text: string, duration?: number) => {
        const status = makeStatus(title, text, duration);
        addStatus(status);
    };

    const displaySuccessStatus = (text: string, duration?: number) => {
        const status = makeSuccessStatus(text, duration);
        addStatus(status);
    };

    const displayErrorStatus = (text: string, duration?: number) => {
        const status = makeErrorStatus(text, duration);
        addStatus(status);
    };

    const displayInfoStatus = (text: string, duration?: number) => {
        const status = makeInfoStatus(text, duration);
        addStatus(status);
    };

    const deleteStatus = (id: string) => {
        const { statusList } = statusSet;
        const statusIndex = statusList.findIndex((status) => status.id === id);

        statusList.splice(statusIndex, 1);
        setStatusSet({ ...statusSet, statusList: statusList });
    };

    const deleteAllStatuses = () => {
        setStatusSet({ ...statusSet, statusList: [] });
    };

    return (
        <StatusContext.Provider
            value={{
                ...statusSet,
                displayStatus: displayStatus,
                displaySuccessStatus: displaySuccessStatus,
                displayErrorStatus: displayErrorStatus,
                displayInfoStatus: displayInfoStatus,
                deleteStatus: deleteStatus,
                deleteAllStatuses: deleteAllStatuses,
            }}
        >
            {children}
        </StatusContext.Provider>
    );
};

export const useStatus = () => useContext(StatusContext);

export default StatusProvider;

import "./Status.css";
import { useEffect } from "react";
import { Status } from "./Status.tsx";
import { useStatus } from "./StatusProvider";

interface Props {
    // Define any props if needed
}

export const StatusHolder = () => {
    const { statusList, deleteStatus } = useStatus();

    useEffect(() => {
        const interval = setInterval(() => {
            if (statusList.length) {
                deleteExpiredStatuses();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [statusList]);

    const deleteExpiredStatuses = () => {
        const now = Date.now();

        for (let status of statusList) {
            if (status.timeout && status.timeout < now) {
                deleteStatus(status.id);
            }
        }
    };

    return (
        <>
            <div className="status-holder">
                {statusList.map((status, i) => (
                    <Status
                        key={i}
                        onClose={() => deleteStatus(status.id)}
                        type={status.type}
                        text={status.text}
                        title={status.title}
                    />
                ))}
            </div>
        </>
    );
};

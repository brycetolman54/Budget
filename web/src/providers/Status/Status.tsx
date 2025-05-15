import { StatusIcon, WindowX } from "../../components/Icons";
import { StatusType } from "./Status";
import "./Status.css";

interface Props {
    type: StatusType;
    text: string;
    title: string;
    onClose: () => void;
}

export const Status = (props: Props) => {
    return (
        <>
            <div className="status">
                <div className="status-header">
                    <div className="status-icon">
                        <StatusIcon statusType={props.type} />
                    </div>
                    <div className="status-title">
                        <strong>{props.title}</strong>
                    </div>
                    <div className="status-close">
                        <WindowX onClick={() => props.onClose()} />
                    </div>
                </div>
                <div className="status-body">
                    <div className="status-text">{props.text}</div>
                </div>
            </div>
        </>
    );
};

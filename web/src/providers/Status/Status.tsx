import {
    CheckCircle,
    ConcentricCircle,
    CrossCircle,
    PlusCircle,
} from "../../components/Icons/StatusIcons";
import { WindowX } from "../../components/Icons/SiteIcons";
import { StatusType } from "./Status";
import "./Status.css";

interface Props {
    type: StatusType;
    text: string;
    title: string;
    onClose: () => void;
}

export const Status = (props: Props) => {
    let icon;
    switch (props.type) {
        case StatusType.Success:
            icon = <CheckCircle />;
            break;
        case StatusType.Error:
            icon = <CrossCircle />;
            break;
        case StatusType.Info:
            icon = <PlusCircle />;
            break;
        default:
            icon = <ConcentricCircle />;
    }

    return (
        <>
            <div className="status">
                <div className="status-header">
                    <div className="status-icon">{icon}</div>
                    <div className="status-title">
                        <strong>{props.title}</strong>
                    </div>
                    <div className="status-close">
                        <WindowX onClick={props.onClose} />
                    </div>
                </div>
                <div className="status-body">
                    <div className="status-text">{props.text}</div>
                </div>
            </div>
        </>
    );
};

import "./CrossCircle.css";

export const CrossCircle = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="cross-circle"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
            />
            <line
                x1="8"
                y1="8"
                x2="16"
                y2="16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
            />
            <line
                x1="16"
                y1="8"
                x2="8"
                y2="16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
            />
        </svg>
    );
};

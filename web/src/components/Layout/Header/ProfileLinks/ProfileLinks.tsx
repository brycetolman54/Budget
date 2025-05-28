import "./ProfileLinks.css";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    mounted: boolean;
}

const ProfileLinks = (props: Props) => {
    return (
        <>
            <div
                className={`profile-links-overlay ${
                    props.mounted ? (props.open ? "open" : "closed") : ""
                }`}
                onClick={() => props.setOpen(!props.open)}
            >
                <div
                    className={`profile-links ${
                        props.mounted ? (props.open ? "open" : "closed") : ""
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="profile-nav-link">hey</div>
                    <div className="profile-nav-link">you</div>
                    <div className="profile-nav-link">longer</div>
                </div>
            </div>
        </>
    );
};

export default ProfileLinks;

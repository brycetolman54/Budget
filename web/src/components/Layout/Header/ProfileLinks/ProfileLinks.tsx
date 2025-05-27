import "./ProfileLinks.css";

interface Props {
    open: boolean;
    mounted: boolean;
}

const ProfileLinks = (props: Props) => {
    return (
        <>
            <div
                className={`profile-links ${
                    props.mounted ? (props.open ? "open" : "closed") : ""
                }`}
            >
                <div>hey</div>
                <div>you</div>
                <div>longer</div>
            </div>
        </>
    );
};

export default ProfileLinks;

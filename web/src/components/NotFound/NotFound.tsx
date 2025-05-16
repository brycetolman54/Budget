import { AuthToken, User } from "shared";
import { useUser } from "../../providers/User";
import { useStatus } from "../../providers/Status/StatusProvider";

const NotFound = () => {
    const { setUser, clearUser } = useUser();

    const { displaySuccessStatus } = useStatus();

    return (
        <>
            <button
                onClick={() =>
                    setUser(
                        new User(
                            "bryce",
                            "bryce",
                            "mine@me.com",
                            {
                                icon: "king",
                                fg_color: "#F00",
                                line_color: "#0F0",
                                bg_color: "#00F",
                                ring_color: "#000",
                            },
                            {
                                primary: "#F00",
                                secondary: "#0F0",
                                tertiary: "#00F",
                                light: false,
                            },
                            "tolman",
                            "es"
                        ),
                        AuthToken.Generate(3),
                        true
                    )
                }
            >
                Set User
            </button>
            <button onClick={() => clearUser()}>Clear User</button>
            <button onClick={() => displaySuccessStatus("Success!")}>
                Success
            </button>
        </>
    );
};

export default NotFound;

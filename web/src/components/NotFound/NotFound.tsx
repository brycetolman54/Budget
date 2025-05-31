import { AuthToken, User } from "shared";
import { useUser } from "../../providers/User";
import { useStatus } from "../../providers/Status/StatusProvider";
import { useMessage } from "../../providers/Message/MessageProvider";
import { useTheme } from "../../providers/Theme";

const NotFound = () => {
    const { setUser, clearUser } = useUser();

    const { displaySuccessStatus } = useStatus();

    const { showMessage } = useMessage();

    const { theme, updateTheme } = useTheme();

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
                                primary: "rgba(255, 0, 0)",
                                secondary: "rgba(0, 255, 0)",
                                tertiary: "rgba(0, 0, 255)",
                                light: false,
                            },
                            "tolman",
                            "es"
                        ),
                        AuthToken.Generate(1),
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
            <button
                onClick={() =>
                    showMessage("Hello World!", true, () => {}, "Accept")
                }
            >
                Show Message
            </button>
            <button
                onClick={() => updateTheme({ ...theme, light: !theme.light })}
            >
                Set Theme
            </button>
        </>
    );
};

export default NotFound;

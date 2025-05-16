import { Icon } from "../other/Icon";
import { Theme } from "../other/Theme";

export class User {
    private _username: string;
    private _fullName: string;
    private _email: string;
    private _icon: Icon;
    private _theme: Theme;
    private _group: string;
    private _language: string;

    constructor(
        username: string,
        fullName: string,
        email: string,
        icon: Icon,
        theme: Theme,
        group: string,
        language: string
    ) {
        this._username = username;
        this._fullName = fullName;
        this._email = email;
        this._icon = icon;
        this._theme = theme;
        this._group = group;
        this._language = language;
    }

    public get username(): string {
        return this._username;
    }

    public get fullName(): string {
        return this._fullName;
    }

    public get email(): string {
        return this._email;
    }

    public get icon(): Icon {
        return this._icon;
    }

    public get theme(): Theme {
        return this._theme;
    }

    public get group(): string {
        return this._group;
    }

    public get language(): string {
        return this._language;
    }

    public toJson(): string {
        return JSON.stringify(this);
    }

    public static fromJson(json: string | null): User | null {
        if (!!json) {
            const jsonObject: {
                _username: string;
                _fullName: string;
                _email: string;
                _icon: Icon;
                _theme: Theme;
                _group: string;
                _language: string;
            } = JSON.parse(json);
            return new User(
                jsonObject._username,
                jsonObject._fullName,
                jsonObject._email,
                jsonObject._icon,
                jsonObject._theme,
                jsonObject._group,
                jsonObject._language
            );
        } else {
            return null;
        }
    }
}

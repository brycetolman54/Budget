import { Theme } from "./Theme";

export class User {
    private _username: string;
    private _fullName: string;
    private _email: string;
    private _imageUrl: string;
    private _theme: Theme;
    private _group: string;

    constructor(
        username: string,
        fullName: string,
        email: string,
        imageUrl: string,
        theme: Theme,
        group: string
    ) {
        this._username = username;
        this._fullName = fullName;
        this._email = email;
        this._imageUrl = imageUrl;
        this._theme = theme;
        this._group = group;
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

    public get imageUrl(): string {
        return this._imageUrl;
    }

    public get theme(): Theme {
        return this._theme;
    }

    public get group(): string {
        return this._group;
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
                _imageUrl: string;
                _theme: Theme;
                _group: string;
            } = JSON.parse(json);
            return new User(
                jsonObject._username,
                jsonObject._fullName,
                jsonObject._email,
                jsonObject._imageUrl,
                jsonObject._theme,
                jsonObject._group
            );
        } else {
            return null;
        }
    }
}

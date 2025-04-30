import { Theme } from "./Theme";

export class User {
    private _username: string;
    private _fullName: string;
    private _email: string;
    private _imageUrl: string;
    private _theme: Theme;

    constructor(
        username: string,
        fullName: string,
        email: string,
        imageUrl: string,
        theme: Theme
    ) {
        this._username = username;
        this._fullName = fullName;
        this._email = email;
        this._imageUrl = imageUrl;
        this._theme = theme;
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

    public toJson(): string {
        return JSON.stringify(this);
    }

    public fromJson(json: string | null): User | null {
        if (!!json) {
            const jsonObject: {
                _username: string;
                _fullName: string;
                _email: string;
                _imageUrl: string;
                _theme: Theme;
            } = JSON.parse(json);
            return new User(
                jsonObject._username,
                jsonObject._fullName,
                jsonObject._email,
                jsonObject._imageUrl,
                jsonObject._theme
            );
        } else {
            return null;
        }
    }
}

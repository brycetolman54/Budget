import { v4 } from "uuid";

export enum AuthTokenType {
    None = 0,
    Admin = 1,
    Parent = 2,
    Child = 3,
}

export class AuthToken {
    private _token: string;
    private _type: AuthTokenType;
    private _time: number;

    constructor(
        token: string,
        time: number,
        type: AuthTokenType = AuthTokenType.None
    ) {
        this._token = token;
        this._type = type;
        this._time = time;
    }

    public static Generate(type: AuthTokenType = 0): AuthToken {
        return new AuthToken(v4(), Date.now(), type);
    }

    public get token(): string {
        return this._token;
    }

    public get type(): AuthTokenType {
        return this._type;
    }

    public get time(): number {
        return this._time;
    }

    public toJson(): string {
        return JSON.stringify(this);
    }

    public fromJson(json: string | null | undefined): AuthToken | null {
        if (!!json) {
            const jsonObject: {
                _token: string;
                _timestamp: number;
                _type: AuthTokenType;
            } = JSON.parse(json);
            return new AuthToken(
                jsonObject._token,
                jsonObject._timestamp,
                jsonObject._type
            );
        } else {
            return null;
        }
    }
}

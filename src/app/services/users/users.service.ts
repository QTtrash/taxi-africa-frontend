import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Credentials {
    login: string;
    password: string;
}

@Injectable({
    providedIn: "root",
})
export class UsersService {
    constructor(private http: HttpClient) {}

    async findUserIdByCredentials(credentials: Credentials): Promise<any> {
        const authUrl = "https://taxi-africa-backend.herokuapp.com/users/login";
        return this.http.post<any>(authUrl, credentials).toPromise();
    }
}

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../services/users/users.service";

@Component({
    selector: "app-login",
    templateUrl: "./app.login.component.html",
    providers: [UsersService],
})
export class AppLoginComponent {
    constructor(
        private usersService: UsersService,
        private navigation: Router
    ) {}

    login: string = "";
    password: string = "";

    async authenticate() {
        const credentials = { login: this.login, password: this.password };
        const { id } = await this.usersService.findUserIdByCredentials(
            credentials
        );
        this.navigation.navigate([`admin-dashboard/${id}`]);
    }
}

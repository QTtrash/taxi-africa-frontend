import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { DriversService } from "src/app/services/drivers/drivers.service";

@Component({
    selector: "app-registration",
    templateUrl: "./app.registrationRu.component.html",
    providers: [MessageService],
})
export class RegistrationRuComponent {
    constructor(
        private messageService: MessageService,
        private driversService: DriversService
    ) {}

    city: string;
    firstName: string = "";
    lastName: string = "";
    phone: string = "";
    birthdate: string = "";
    license: string = "";
    licenseIssueDate: string = "";
    licenseValidDate: string = "";
    carBrand: string = "";
    carModel: string = "";
    carPlate: string = "";
    carYear: string = "";
    carColor: string = "";
    driverHasPhone: boolean = true;

    finished: boolean = false;

    async sendApplication() {
        const driver = {
            city: this.city,
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            birthdate: this.birthdate,
            license: this.license,
            licenseIssueDate: this.licenseIssueDate,
            licenseValidDate: this.licenseValidDate,
            carBrand: this.carBrand,
            carModel: this.carModel,
            carPlate: this.carPlate,
            carYear: this.carYear,
            carColor: this.carColor,
            driverHasPhone: this.driverHasPhone,
        };

        const driverResponse = await this.driversService.createDriver(driver);
        console.log(driverResponse);

        if (driverResponse) {
            this.finished = true;
            this.messageService.add({
                key: "tst",
                severity: "success",
                summary: "Success Message",
                detail: "Thank you for completing the application",
            });
        } else {
            this.messageService.add({
                key: "tst",
                severity: "error",
                summary: "Error Message",
                detail: "Please try again after refreshing the page or contact your agent",
            });
        }
    }
}

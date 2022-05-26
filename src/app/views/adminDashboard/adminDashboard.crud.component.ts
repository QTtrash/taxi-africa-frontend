import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DriversService } from "src/app/services/drivers/drivers.service";

@Component({
    templateUrl: "./adminDashboard.crud.component.html",
    styles: [
        `
            :host ::ng-deep .p-dialog .product-image {
                width: 150px;
                margin: 0 auto 2rem auto;
                display: block;
            }
        `,
    ],
})
export class AdminDashboardComponent implements OnInit {
    cols: any[];

    drivers: any[];

    constructor(
        private route: ActivatedRoute,
        private driversService: DriversService
    ) {}

    async ngOnInit() {
        this.cols = [
            { field: "firstName", header: "First Name" },
            { field: "lastName", header: "Last Name" },
            { field: "city", header: "City" },
            { field: "phone", header: "Phone" },
            { field: "birthdate", header: "Birthdate" },
            { field: "license", header: "License" },
            { field: "licenseIssueDate", header: "License Issue Date" },
            { field: "licenseValidDate", header: "License Valid Date" },
            { field: "carBrand", header: "Car Brand" },
            { field: "carModel", header: "Car Model" },
            { field: "carPlate", header: "Car Plate" },
            { field: "carYear", header: "Car Year" },
            { field: "carColor", header: "Car color" },
            { field: "driverHasPhone", header: "driver has phone" },
        ];
        this.drivers = await this.driversService.findDriverByAdminId(
            this.route.snapshot.paramMap.get("id")
        );
    }
}
